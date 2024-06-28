import React from "react";

import { Label } from "../ui/Label";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

import { CornerDownLeft } from "lucide-react";
import { useRouter } from "next/router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { Switch } from "../ui/Switch";
import { cn } from "@/lib/utils";

export default function ConversationDetail({ id, appearance }: any) {
  const router = useRouter();
  const chatHistoryRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const [isDataLoading, setIsDataLoading] = React.useState(true);
  const [admin, setAdmin] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [chatHistory, setChatHistory] = React.useState([]);
  const [detail, setDetail] = React.useState({});

  React.useEffect(() => {
    if (id) {
      fetchContentEntries();
      fetchConversation();
    }
  }, [id]);

  React.useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
    const element = containerRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [chatHistory]);

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    const response = await fetch(
      `/api/projects/${router.query.id}/history/chat?idConversation=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const appContent = await response.json();

    setChatHistory(appContent);
    setIsDataLoading(false);
  };

  const fetchConversation = async () => {
    setIsDataLoading(true);
    const response = await fetch(
      `/api/projects/${router.query.id}/conversations/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const appContent = await response.json();

    setAdmin(appContent.isAdmin);
    setIsDataLoading(false);
  };

  const updateConversation = async (e) => {
    const res = await fetch(
      `/api/projects/${router.query.id}/conversations/${id}/update`,
      {
        method: "PUT",
        body: JSON.stringify({ isAdmin: e }),
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
    const data = await res.json();

    if (res.ok) {
      setAdmin(data.isAdmin);
    }
  };

  async function chatNow() {
    if (query.trim() == "") {
      return;
    }

    const response = await fetch(
      `/api/projects/${router.query.id}/history/chat/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: query,
          speaker: "ADMIN",
          conversationId: id,
        }),
      }
    );

    if (response.ok) {
      fetchContentEntries();
      setQuery("");
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div className="relative flex h-full flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 border">
        <div className="flex-1 relative">
          <div
            ref={chatHistoryRef}
            className="chat-history flex-grow flex flex-col h-full absolute w-full"
          >
            {id && (
              <div className="flex items-center space-x-2 border-b mb-4 pb-4  ">
                <Switch
                  id="airplane-mode"
                  className="data-[state=unchecked]:bg-gray-200"
                  checked={admin}
                  onCheckedChange={(e) => updateConversation(e)}
                />
                <Label htmlFor="airplane-mode">Handover Admin</Label>
              </div>
            )}
            <div className="overflow-y-auto" ref={containerRef}>
              {chatHistory.map((message, index) => (
                <div key={index}>
                  {(message.speaker === "AI" ||
                    message.speaker === "ADMIN") && (
                    <div className="mb-2 text-right">
                      <div
                        className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block"
                        style={{
                          background: appearance.setting.color,
                          color: appearance.setting.txtColor,
                        }}
                        dangerouslySetInnerHTML={{ __html: message.message }}
                      />
                    </div>
                  )}
                  {message.speaker === "USER" && (
                    <div className="mb-2 flex">
                      <Avatar className={`mr-2`}>
                        <AvatarImage />
                        <AvatarFallback
                          className="text-white bg-gray-200"
                          style={{
                            background: appearance.setting.color,
                            color: appearance.setting.txtColor,
                          }}
                        >
                          A
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block"
                        dangerouslySetInnerHTML={{ __html: message.message }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {id && (
              <div
                className={cn(
                  "pt-4 mt-4 border-t flex",
                  admin ? "pointer-events-auto" : "pointer-events-none"
                )}
              >
                <input
                  id="user-input"
                  type="text"
                  className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
                <button
                  id="send-button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                  style={{
                    background: appearance.setting.color,
                    color: appearance.setting.txtColor,
                  }}
                  onClick={() => chatNow()}
                  disabled={isDataLoading}
                >
                  Send
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
