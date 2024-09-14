import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/router";
import ProjectLayout from "@/components/layout/ProjectLayout";
import { useToast } from "@/components/ui/Toast/use-toast";
import ConversationPreview from "@/components/Conversations/Preview";
import { Separator } from "@/components/ui/Separator";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { useSession } from "next-auth/react";
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LibraryBig, Palette, SquareTerminal } from "lucide-react";
import SidebarChatbot from "@/components/sidebar/chatbot";

export default function ProjectAppearance(props) {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();

  const fileInputRef = useRef(null);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [appContent, setAppContent] = useState({});

  // Form
  const [title, setTitle] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [welcome, setWelcome] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [logo, setLogo] = useState("");
  const [color, setColor] = useState("");
  const [txtColor, setTxtColor] = useState("");
  const [icon, setIcon] = useState("");
  const [intercom, setIntercom] = useState("");

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    const response = await fetch(`/api/projects/${router.query.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const appContent = await response.json();

    if (response.ok) {
      setAppContent(appContent);
      setTitle(appContent.title);
      setTooltip(appContent.tooltip);
      setWelcome(appContent.welcome);
      setPlaceholder(appContent.placeholder);
      setColor(JSON.parse(appContent.setting)?.color || "#5423E7");
      setTxtColor(JSON.parse(appContent.setting)?.txtColor || "#FFF");
      setIcon(JSON.parse(appContent.setting)?.icon || "");
      setIntercom(JSON.parse(appContent.setting)?.intercom || "");
    }

    setIsDataLoading(false);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchContentEntries();
    }
  }, [router.query.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      title,
      tooltip,
      welcome,
      placeholder,
      setting: JSON.stringify({ color, txtColor, icon, intercom }),
    };

    // Make call to backend to create user
    const res = await fetch(`/api/projects/${router.query.id}/update`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      fetchContentEntries();
      toast({
        variant: "success",
        title: "Yeay! Update success.",
        description: "Success! Update project successfully.",
      });
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
            fileInputRef.current.value = "";
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
      <ProjectLayout>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <SidebarChatbot />
          <div className="relative flex h-full min-h-[50vh] flex-col bg-muted/50 pt-4 pl-4 lg:col-span-2 xl:col-span-4 border-l gap-6">
            <div className="flex w-full">
              <div className="flex flex-col flex-1 h-full gap-4">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold">Chatbot Interface</h1>
                </div>
                <Separator className="bg-gray-200" />
                <form
                  className="grid w-full items-start gap-6"
                  onSubmit={handleSubmit}
                >
                  <div className="h-[calc(100vh-230px)] overflow-auto grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={title}
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
                        value={tooltip}
                        placeholder="Input Tooltip"
                        onChange={(e) => setTooltip(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="welcome">Welcome</Label>
                      <Input
                        id="welcome"
                        type="text"
                        value={welcome}
                        placeholder="Input Welcome"
                        onChange={(e) => setWelcome(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="placeholder">Placeholder</Label>
                      <Input
                        id="placeholder"
                        type="text"
                        value={placeholder}
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
                        ref={fileInputRef}
                        onChange={async (
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => uploadFile(e)}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="intercom">Intercom Workspace ID</Label>
                      <Input
                        id="intercom"
                        type="text"
                        value={intercom}
                        placeholder="Input Intercom Workspace ID"
                        onChange={(e) => setIntercom(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="ml-auto gap-1.5 text-white"
                    disabled={isDataLoading}
                  >
                    Save Project
                  </Button>
                </form>
              </div>
              <div className="w-2/4">
                <ConversationPreview
                  project={{
                    title,
                    tooltip,
                    welcome,
                    placeholder,
                    setting: { logo, color, txtColor, icon },
                  }}
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </main>
      </ProjectLayout>
    </>
  );
}
