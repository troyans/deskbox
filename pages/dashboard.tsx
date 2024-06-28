import React, { useEffect, useState } from "react";
import SEO from "@/components/additional/seo";
import DashboardHero from "@/components/dashboard/DashboardHero";
import FeedDataCard from "@/components/aiComponent/feedDataCard";
import Chatbot from "@/components/aiComponent/chatbot";
import DalleImageGeneration from "@/components/aiComponent/dalleImageGeneration";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Bot, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/router";

export default function Dashboard(props) {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("feed");
  const [reload, setReload] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [appContent, setAppContent] = useState([]);

  useEffect(() => {
    setIsDataLoading(true);
    const fetchContentEntries = async () => {
      setIsDataLoading(true);
      const response = await fetch(`/api/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const appContent = await response.json();

      setAppContent(appContent);
      setIsDataLoading(false);
    };

    fetchContentEntries();
  }, [reload]);

  return (
    <>
      <DashboardLayout>
        <div className="mx-auto flex w-full max-w-6xl gap-2 items-center">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <Button
            size="sm"
            className="h-8 gap-1 ml-auto text-white"
            onClick={() => router.push("/project/create")}
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Project
            </span>
          </Button>
        </div>
        <div className="mx-auto w-full max-w-6xl grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {appContent.map((item) => {
            return (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Bot className="h-8 w-8 text-muted-foreground" />
                    <div className="text-2xl font-bold">{item.title}</div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="text-xs text-muted-foreground ml-auto">
                      Copy Link
                    </div>
                    <Link
                      href={`/project/${item.id}/dashboard`}
                      className="text-xs text-muted-foreground"
                    >
                      Setting
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DashboardLayout>
      <main className="space-y-10 mb-10 hidden">
        <DashboardHero />

        <div className="flex justify-center gap-4 mb-5">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              activeTab === "feed"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("feed")}
          >
            Load data using Langchain
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              activeTab === "chat"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("chat")}
          >
            Chat with the loaded data
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              activeTab === "image-gen"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("image-gen")}
          >
            Image generation with Dalle-3
          </button>
        </div>

        <div className="bg-white rounded-lg px-6 py-2">
          {activeTab === "feed" && <FeedDataCard />}
          {activeTab === "chat" && <Chatbot />}
          {activeTab === "image-gen" && <DalleImageGeneration />}
        </div>
      </main>
    </>
  );
}
