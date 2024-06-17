import React from "react";

import { Label } from "../ui/Label";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

import { CornerDownLeft } from "lucide-react";
import { useRouter } from "next/router";

export default function ConversationDetail({ id }: any) {
  const router = useRouter();
  const chatHistoryRef = React.useRef(null);

  const [query, setQuery] = React.useState("");
  const [chatHistory, setChatHistory] = React.useState([]);

  React.useEffect(() => {
    if (id) {
      fetchContentEntries();
    }
  }, [id]);

  React.useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const fetchContentEntries = async () => {
    // setIsDataLoading(true);
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
    // setIsDataLoading(false);
  };

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
          namespace: router.query.id,
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
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 border">
        <div className="flex-1">
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
        {/* <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
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
