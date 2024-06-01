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

export default function ProjectCreate() {
  const router = useRouter();
  const { toast } = useToast();

  // Form
  const [title, setTitle] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [welcome, setWelcome] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      title,
      tooltip,
      welcome,
      placeholder,
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
      router.push(`/project/${data.id}/dashboard`);
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
          <div className="relative hidden flex-col items-start gap-8 md:flex">
            <form
              className="grid w-full items-start gap-6"
              onSubmit={handleSubmit}
            >
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Create Project
                </legend>
                <div className="grid gap-3 hidden">
                  <Label htmlFor="model">Name</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Genesis
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Our fastest model for general use cases.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Bird className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Explorer
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Performance and speed for efficiency.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Quantum
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              The most powerful model for complex computations.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
                <div className="grid grid-cols-2 gap-4 hidden">
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Top P</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Top K</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4 hidden">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Project Setting
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="You are a..."
                    className="min-h-[9.5rem]"
                  />
                </div>
              </fieldset>
              <Button type="submit" size="sm" className="ml-auto gap-1.5">
                Create Project
              </Button>
            </form>
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div className="flex-1" />
            <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                disabled
              />
              <div className="flex items-center p-3 pt-0">
                <Button
                  type="button"
                  size="sm"
                  className="ml-auto gap-1.5"
                  disabled
                >
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
}
