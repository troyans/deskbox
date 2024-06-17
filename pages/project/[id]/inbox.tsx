import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import MailList from "@/components/Conversations/List";
import ProjectLayout from "@/components/layout/ProjectLayout";
import ConversationDetail from "@/components/Conversations/Detail";
import { Separator } from "@/components/ui/Separator";
import { useRouter } from "next/router";

export default function ProjectInbox() {
  const router = useRouter();

  const [id, setId] = React.useState("");
  const [isDataLoading, setIsDataLoading] = React.useState(true);
  const [appContent, setAppContent] = React.useState([]);

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    const response = await fetch(
      `/api/projects/${router.query.id}/conversations`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const appContent = await response.json();

    setAppContent(appContent);
    setIsDataLoading(false);
  };

  React.useEffect(() => {
    if (router.query.id) {
      fetchContentEntries();
    }
  }, [router.query.id]);

  return (
    <ProjectLayout>
      <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <Tabs defaultValue="all" className="border rounded-xl">
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Inbox</h1>
            {/* <TabsList className="ml-auto">
              <TabsTrigger
                value="all"
                className="text-zinc-600 dark:text-zinc-200"
              >
                All mail
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className="text-zinc-600 dark:text-zinc-200"
              >
                Unread
              </TabsTrigger>
            </TabsList> */}
          </div>
          <Separator className="bg-gray-200" />
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>
          <TabsContent value="all" className="m-0">
            <MailList items={appContent} onClick={(value) => setId(value)} />
          </TabsContent>
          <TabsContent value="unread" className="m-0">
            <MailList items={appContent} onClick={(value) => setId(value)} />
          </TabsContent>
        </Tabs>
        <ConversationDetail id={id} />
      </main>
    </ProjectLayout>
  );
}
