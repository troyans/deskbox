import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Bird,
  CornerDownLeft,
  Mic,
  Paperclip,
  Rabbit,
  Turtle,
} from "lucide-react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { useRouter } from "next/router";
import ProjectLayout from "@/components/layout/ProjectLayout";
import { useToast } from "@/components/ui/Toast/use-toast";

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

  // Chat
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const chatHistoryRef = useRef(null);

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

  useEffect(() => {
    const savedChatHistory = localStorage.getItem("chatver");
    if (savedChatHistory) {
      setChatHistory(JSON.parse(savedChatHistory));
    }
  }, []);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function chatNow(query) {
    if (query.trim() == "") {
      return;
    }

    setQuery("");
    const newChatHistory = [
      ...chatHistory,
      { text: query, sender: "user" },
      { text: "loading...", sender: "bot" },
    ];
    setChatHistory(newChatHistory);

    try {
      const response = await fetch("/api/chat/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: query,
          history: chatHistory.map((message) => message.text),
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        const updatedChatHistory = newChatHistory.slice(0, -1); // Remove the last "loading" message
        updatedChatHistory.push({ text: responseData.text, sender: "bot" });
        setChatHistory(updatedChatHistory);
        localStorage.setItem("chatver", JSON.stringify(updatedChatHistory));
      } else {
        console.error("Error:", responseData);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  return (
    <>
      <ProjectLayout>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative hidden flex-col items-start gap-8 md:flex">
            <form
              className="grid w-full items-start gap-6"
              onSubmit={handleSubmit}
            >
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Detail Project
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
                Save Project
              </Button>
            </form>
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 border">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div className="flex-1">
              <div
                ref={chatHistoryRef}
                className="chat-history mt-4 overflow-y-auto flex-grow flex flex-col h-[55vh]"
              >
                {chatHistory.map((message, index) => (
                  <div
                    key={index}
                    className={`text-sm py-2 px-4 rounded-md mb-2 mr-4 ${
                      message.sender === "user"
                        ? "bg-gray-200 self-end"
                        : "bg-blue-500 text-white"
                    }`}
                    dangerouslySetInnerHTML={{ __html: message.text }}
                  ></div>
                ))}
              </div>
            </div>
            <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <div className="flex items-center p-3 pt-0">
                <Button
                  type="button"
                  size="sm"
                  className="ml-auto gap-1.5"
                  onClick={() => chatNow(query)}
                >
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </ProjectLayout>
    </>
  );
}
