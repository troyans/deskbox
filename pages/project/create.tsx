import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useRouter } from "next/router";
import { useToast } from "@/components/ui/Toast/use-toast";
import { Separator } from "@/components/ui/Separator";
import ConversationPreview from "@/components/Conversations/Preview";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase";

export default function ProjectCreate(props) {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const [isDataLoading, setIsDataLoading] = useState(true);

  // Form
  const [title, setTitle] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [welcome, setWelcome] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [logo, setLogo] = useState("");
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = async (data: any) => {
    const uploadId = uuidv4();
    const formData = new FormData();

    files.forEach((file: File, index: number) => {
      formData.append(`file${index}`, file);

      const appContentEntry = {
        uploadId,
        fileName: file.name,
        namespace: router.query.id,
        createdAt: new Date(),
      };

      formData.append(
        `namespace${index}`,
        Array.isArray(router.query.id) ? router.query.id[0] : router.query.id
      );
      formData.append(`uploadId${index}`, appContentEntry.uploadId);
      formData.append(`filename${index}`, appContentEntry.fileName);
    });

    try {
      const response = await fetch("/api/vector-db/pinecone/upload-data", {
        method: "POST",
        body: formData,
      });

      await response.json();

      await files.forEach(async (file: File) => {
        await createContentEntry({
          uploadId,
          fileName: file.name,
        });
      });

      fileInputRef.current.value = "";
      router.push(`/project/${data.id}/inbox`);
      setIsDataLoading(false);
      toast({
        variant: "success",
        title: "Yeay! Update success.",
        description: "Success! Update project successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed! Check you input and try again.",
      });
      console.error("Error uploading files:", error);
    }
  };

  async function createContentEntry(data) {
    const response = await fetch(
      `/api/projects/${router.query.id}/files/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = async (e) => {
    setIsDataLoading(true);
    e.preventDefault();
    let data = {
      title,
      tooltip,
      welcome,
      placeholder,
      setting: JSON.stringify({ color, icon }),
    };

    // Make call to backend to create user
    const res = await fetch("/api/projects/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      handleFileChange(data);
      // router.push(`/project/${data.id}/inbox`);
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed! Check you input and try again.",
      });
    }
  };

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setIsDataLoading(true);
      const file = event.target.files[0];
      const storageRef = ref(
        storage,
        `/icon/${session.user.id}.${file.name.split(".").pop()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) =>
          toast({
            variant: "destructive",
            title: err.message,
          }),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setIcon(url);
            setIsDataLoading(false);
            fileInputRef2.current.value = "";
          });
        }
      );
    } else {
      toast({
        variant: "destructive",
        title: "Please upload an image first!",
      });
    }
  };

  return (
    <>
      <DashboardLayout>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-xl">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Setup Bot</h1>
            </div>
            <Separator className="bg-gray-200" />
            <form
              className="grid w-full items-start gap-6 p-4"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-3">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tooltip">Tooltip</Label>
                <Input
                  id="tooltip"
                  type="text"
                  placeholder="Tooltip"
                  onChange={(e) => setTooltip(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="welcome">Welcome</Label>
                <Input
                  id="welcome"
                  type="text"
                  placeholder="Welcom"
                  onChange={(e) => setWelcome(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="placeholder">Placeholder</Label>
                <Input
                  id="placeholder"
                  type="text"
                  placeholder="Placeholder"
                  onChange={(e) => setPlaceholder(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="color">Brand color</Label>
                <Input
                  id="color"
                  type="color"
                  placeholder="Brand Color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="color">Icon</Label>
                <Input
                  type="file"
                  accept=".svg, .png, .jpg, .webp"
                  name="file"
                  ref={fileInputRef2}
                  onChange={async (e: React.ChangeEvent<HTMLInputElement>) =>
                    uploadFile(e)
                  }
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="color">Upload File</Label>
                <Input
                  type="file"
                  accept=".pdf, .txt, .docx, .csv, .json"
                  name="file"
                  ref={fileInputRef}
                  onChange={(e) => setFiles(Array.from(e.target.files))}
                />
              </div>
              <Button
                type="submit"
                size="sm"
                className="ml-auto gap-1.5 text-white"
                disabled={isDataLoading}
              >
                Create Project
              </Button>
            </form>
          </div>
          <ConversationPreview
            project={{
              title,
              tooltip,
              welcome,
              placeholder,
              setting: { logo, color, icon },
            }}
          />
        </main>
      </DashboardLayout>
    </>
  );
}
