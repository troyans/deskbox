import React from "react";
import { CardDescription, CardTitle } from "@/components/ui/Card";
import ProjectLayout from "@/components/layout/ProjectLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import SidebarChatbot from "@/components/sidebar/chatbot";
import KnowledgeFile from "@/components/knowledge/file";
import KnowledgeLink from "@/components/knowledge/link";

export default function ProjectKnowledge(props) {
  return (
    <>
      <ProjectLayout>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <SidebarChatbot />
          <div className="relative flex h-full min-h-[50vh] flex-col bg-muted/50 py-4 pl-4 lg:col-span-2 xl:col-span-4 border-l gap-6">
            <div className="flex">
              <div className="flex flex-col space-y-1.5">
                <CardTitle>Chatbot Knowledge Base</CardTitle>
                <CardDescription>
                  Manage your knowledge base and view their response.
                </CardDescription>
              </div>
            </div>
            <Tabs defaultValue="file">
              <TabsList>
                <TabsTrigger value="file">File</TabsTrigger>
                <TabsTrigger value="URL">URL</TabsTrigger>
              </TabsList>
              <TabsContent value="file">
                <KnowledgeFile />
              </TabsContent>
              <TabsContent value="URL">
                <KnowledgeLink />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </ProjectLayout>
    </>
  );
}
