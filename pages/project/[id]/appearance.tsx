import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Bird, Rabbit, Turtle } from "lucide-react";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useRouter } from "next/router";
import ProjectLayout from "@/components/layout/ProjectLayout";
import { useToast } from "@/components/ui/Toast/use-toast";
import ConversationPreview from "@/components/Conversations/Preview";
import { Separator } from "@/components/ui/Separator";

export default function ProjectAppearance() {
  const router = useRouter();
  const { toast } = useToast();

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [appContent, setAppContent] = useState({});

  // Form
  const [title, setTitle] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [welcome, setWelcome] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [logo, setLogo] = useState("");
  const [color, setColor] = useState("");

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    const response = await fetch(`/api/projects/${router.query.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const appContent = await response.json();

    setAppContent(appContent);
    setTitle(appContent.title);
    setTooltip(appContent.tooltip);
    setWelcome(appContent.welcome);
    setPlaceholder(appContent.placeholder);
    setColor(JSON.parse(appContent.setting).color);
    setIsDataLoading(false);
  };

  useEffect(() => {
    if (router.query.id) {
      setIsDataLoading(true);

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
      setting: JSON.stringify({ color }),
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

  return (
    <>
      <ProjectLayout>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-xl">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Customization</h1>
            </div>
            <Separator className="bg-gray-200" />
            <form
              className="grid w-full items-start gap-6 p-4"
              onSubmit={handleSubmit}
            >
              {/* <div className="grid gap-3">
                <Label htmlFor="logo">Logo</Label>
              </div> */}
              <div className="grid gap-3">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={title}
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
                  value={tooltip}
                  placeholder="Tooltip"
                  onChange={(e) => setTooltip(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="welcome">Welcome</Label>
                <Input
                  id="welcome"
                  type="text"
                  value={welcome}
                  placeholder="Welcome"
                  onChange={(e) => setWelcome(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="placeholder">Placeholder</Label>
                <Input
                  id="placeholder"
                  type="text"
                  value={placeholder}
                  placeholder="Placeholder"
                  onChange={(e) => setPlaceholder(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="color">Brand color</Label>
                <Input
                  id="color"
                  type="color"
                  value={color}
                  placeholder="Brand Color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <Button type="submit" size="sm" className="ml-auto gap-1.5">
                Save Project
              </Button>
            </form>
          </div>
          <ConversationPreview
            project={{
              title,
              tooltip,
              welcome,
              placeholder,
              setting: { logo, color },
            }}
          />
        </main>
      </ProjectLayout>
    </>
  );
}
