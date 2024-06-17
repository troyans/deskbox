import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Bird, CornerDownLeft, Rabbit, Turtle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
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
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useRouter } from "next/router";
import { useToast } from "@/components/ui/Toast/use-toast";
import { Separator } from "@/components/ui/Separator";
import ConversationPreview from "@/components/Conversations/Preview";

export default function ProjectCreate() {
  const router = useRouter();
  const { toast } = useToast();

  // Form
  const [title, setTitle] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [welcome, setWelcome] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [logo, setLogo] = useState("");
  const [color, setColor] = useState("");

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
      router.push(`/project/${data.id}/inbox`);
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
              <Button type="submit" size="sm" className="ml-auto gap-1.5">
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
              setting: { logo, color },
            }}
          />
        </main>
      </DashboardLayout>
    </>
  );
}
