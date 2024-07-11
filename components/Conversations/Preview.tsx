import React from "react";

import { BotIcon, X } from "lucide-react";
import { useRouter } from "next/router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { cn } from "@/lib/utils";

export default function ConversationPreview({ project, className }: any) {
  const router = useRouter();
  const chatHistoryRef = React.useRef(null);

  const [query, setQuery] = React.useState("");
  const [chatHistory, setChatHistory] = React.useState([]);
  const [showTooltip, setShowTooltip] = React.useState(true);

  React.useEffect(() => {
    const savedChatId = localStorage.getItem("chatver");
    if (savedChatId) {
      fetchContentEntries();
    }
  }, []);

  React.useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const fetchContentEntries = async () => {
    // setIsDataLoading(true);
    const response = await fetch(
      `/api/projects/${
        router.query.id
      }/history/chat?idConversation=${localStorage.getItem("chatver")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const appContent = await response.json();

    setChatHistory(appContent);
    // setIsDataLoading(false);
  };

  const chatNow = async (query) => {
    if (query.trim() == "") {
      return;
    }

    setQuery("");

    const savedChatId = localStorage.getItem("chatver");

    if (savedChatId) {
      const data = {
        message: query,
        speaker: "USER",
        conversationId: savedChatId,
      };

      createMessage(data);
    } else {
      const data = {
        message: query,
        speaker: "USER",
      };

      createInbox(data);
    }
    responeBot();
  };

  const createInbox = async (data) => {
    const tmpData = {};
    const response = await fetch(
      `/api/projects/${router.query.id}/conversations/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tmpData),
      }
    );

    if (response.ok) {
      const res = await response.json();
      const tmpData = { ...data, conversationId: res.id };
      await localStorage.setItem("chatver", res.id);

      createMessage(tmpData);
    } else {
      return false;
    }
  };

  const createMessage = async (data) => {
    const response = await fetch(
      `/api/projects/${router.query.id}/history/chat/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      fetchContentEntries();
      return true;
    } else {
      return false;
    }
  };

  const responeBot = async () => {
    try {
      const response = await fetch("/api/chat/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: query,
          namespace: router.query.id,
          history: chatHistory.map((message) => {
            return { speaker: message.speaker, text: message.message };
          }),
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        const data = {
          message: responseData.text,
          speaker: "AI",
          conversationId: await localStorage.getItem("chatver"),
        };

        createMessage(data);
      } else {
        console.error("Error:", responseData);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      {/* <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 border"> */}
      <div
        className={cn(
          "relative flex h-full flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 border",
          className
        )}
      >
        <div className="wrapper-chatver">
          <div className="absolute bottom-0 right-0 mb-4 mr-4">
            <button
              id="open-chat"
              className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition duration-300 flex items-center rounded-full"
              style={{
                background: project.setting.color,
                color: project.setting.txtColor,
              }}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              {showTooltip ? (
                <>
                  {project.setting.icon ? (
                    <img
                      src={
                        typeof project.setting.icon === "string"
                          ? project.setting.icon
                          : URL.createObjectURL(project.setting.icon)
                      }
                      className="h-8 w-8 object-cover rounded-full"
                    />
                  ) : (
                    <BotIcon className="h-8 w-8 object-cover rounded-full" />
                  )}
                </>
              ) : (
                <X className="h-8 w-8 object-cover rounded-full" />
              )}
            </button>
          </div>
          <div
            id="chat-container"
            className={
              showTooltip
                ? "absolute bottom-24 right-4 w-96 hidden"
                : "absolute bottom-24 right-4 w-96"
            }
          >
            <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
              <div
                className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center"
                style={{
                  background: project.setting.color,
                  color: project.setting.txtColor,
                }}
              >
                <p className="text-lg font-semibold">{project.title}</p>
                <button
                  id="close-chat"
                  className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400 hidden"
                  onClick={() => setShowTooltip(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div id="chatbox" className="p-4 h-80 overflow-y-auto">
                <div className="mb-2 text-right">
                  <p
                    className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block"
                    style={{
                      background: project.setting.color,
                      color: project.setting.txtColor,
                    }}
                  >
                    hello
                  </p>
                </div>
                <div className="mb-2 flex">
                  <Avatar className={`mr-2`}>
                    <AvatarImage />
                    <AvatarFallback
                      className="text-white bg-blue-500"
                      style={{
                        background: project.setting.color,
                        color: project.setting.txtColor,
                      }}
                    >
                      {project.title.substring(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                    This is a response from the chatbot.
                  </p>
                </div>
              </div>
              <div className="p-4 border-t flex">
                <input
                  id="user-input"
                  type="text"
                  placeholder={project.placeholder}
                  className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  id="send-button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                  style={{
                    background: project.setting.color,
                    color: project.setting.txtColor,
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div
            id="tooltip-container"
            className={
              showTooltip
                ? "absolute bottom-20 right-4"
                : "absolute bottom-20 right-4 hidden"
            }
          >
            <div
              className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-blue-500 rounded-s-xl rounded-se-xl text-white"
              style={{
                background: project.setting.color,
                color: project.setting.txtColor,
              }}
            >
              <p className="text-sm font-normal">
                {project.tooltip || "Tooltip"}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex-1">
          <div
            ref={chatHistoryRef}
            className="chat-history mt-4 overflow-y-auto flex-grow flex flex-col h-[55vh]"
          >
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`text-sm py-2 px-4 rounded-md mb-2 mr-4 ${
                  message.speaker === "USER"
                    ? "bg-gray-200 self-end"
                    : "bg-blue-500 text-white"
                }`}
                dangerouslySetInnerHTML={{ __html: message.message }}
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
        </form> */}
      </div>
    </>
  );
}
