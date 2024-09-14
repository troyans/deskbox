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
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";

export default function ProjectCreate(props) {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const [isDataLoading, setIsDataLoading] = useState(false);

  // Form
  const [title, setTitle] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [welcome, setWelcome] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [logo, setLogo] = useState("");
  const [color, setColor] = useState("#5423E7");
  const [txtColor, setTxtColor] = useState("#FFF");
  const [icon, setIcon] = useState("");
  const [intercom, setIntercom] = useState("");
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState("");

  const handleFileChange = async (data: any) => {
    const uploadId = uuidv4();
    const formData = new FormData();

    files.forEach((file: File, index: number) => {
      formData.append(`file${index}`, file);

      const appContentEntry = {
        uploadId,
        fileName: file.name,
        namespace: data.id,
        createdAt: new Date(),
      };

      formData.append(
        `namespace${index}`,
        Array.isArray(data.id) ? data.id[0] : data.id
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
        await createContentEntry(
          {
            uploadId,
            fileName: file.name,
          },
          data.id
        );
      });

      fileInputRef.current.value = "";
      if (!url) {
        router.push(`/project/${data.id}/inbox`);
        setIsDataLoading(false);
        toast({
          variant: "success",
          title: "Yeay! Update success.",
          description: "Success! Update project successfully.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed! Check you input and try again.",
      });
      console.error("Error uploading files:", error);
    }
  };

  async function createContentEntry(data, id) {
    const response = await fetch(`/api/projects/${id}/files/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  }

  const crawPage = async (data) => {
    try {
      const response = await fetch(`/api/projects/${data.id}/links/create`, {
        method: "POST",
        body: JSON.stringify({ url: await url }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();

      if (response.ok) {
        router.push(`/project/${data.id}/inbox`);
        toast({
          variant: "success",
          title: "Yeay! Update success.",
          description: "Success! Update project successfully.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            "The content on your URL is too long. Please select another URL",
        });
      }
      setIsDataLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed! Check you input and try again.",
      });
      console.error("Error uploading files:", error);
    }
  };

  const handleSubmit = async (e) => {
    setIsDataLoading(true);
    e.preventDefault();
    let data = {
      title,
      tooltip,
      welcome,
      placeholder,
      setting: JSON.stringify({ color, txtColor, icon, intercom }),
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
      if (files.length !== 0) {
        await handleFileChange(data);
      }
      if (url) {
        await crawPage(data);
      }
      if (!url && files.length === 0) {
        router.push(`/project/${data.id}/inbox`);
        setIsDataLoading(false);
        toast({
          variant: "success",
          title: "Yeay! Update success.",
          description: "Success! Update project successfully.",
        });
      }
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
        <main className="flex flex-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 h-full">
          <div className="border rounded-xl flex flex-col flex-1 h-full w-1/3">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">
                Create Your Customer Support Assistant
              </h1>
            </div>
            <Separator className="bg-gray-200" />
            <div className="h-[calc(100%-76px)] overflow-auto mt-4">
              <form
                className="grid w-full items-start gap-6 px-4"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-3">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Input Name"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tooltip">Tooltip</Label>
                  <Input
                    id="tooltip"
                    type="text"
                    placeholder="Input Tooltip"
                    onChange={(e) => setTooltip(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="welcome">Welcome</Label>
                  <Input
                    id="welcome"
                    type="text"
                    placeholder="Input Welcome"
                    onChange={(e) => setWelcome(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="placeholder">Placeholder</Label>
                  <Input
                    id="placeholder"
                    type="text"
                    placeholder="Input Placeholder"
                    onChange={(e) => setPlaceholder(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="color">Brand color</Label>
                  <HexAlphaColorPicker color={color} onChange={setColor} />
                  <HexColorInput
                    color={color}
                    onChange={setColor}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="color">Text color</Label>
                  <HexAlphaColorPicker
                    color={txtColor}
                    onChange={setTxtColor}
                  />
                  <HexColorInput
                    color={txtColor}
                    onChange={setTxtColor}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  <Label htmlFor="intercom">Intercom Workspace ID</Label>
                  <Input
                    id="intercom"
                    type="text"
                    placeholder="Input Intercom Workspace ID"
                    onChange={(e) => setIntercom(e.target.value)}
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
                <div className="grid gap-3">
                  <Label htmlFor="url">URL</Label>
                  <Input
                    id="url"
                    type="text"
                    placeholder="Input Spesific URL"
                    onChange={(e) => setUrl(e.target.value)}
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
          </div>
          <div className="w-2/3">
            <ConversationPreview
              project={{
                title,
                tooltip,
                welcome,
                placeholder,
                setting: { logo, color, txtColor, icon },
              }}
            />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
}
