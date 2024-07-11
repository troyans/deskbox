import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/Input";
import MailList from "@/components/Conversations/List";
import ProjectLayout from "@/components/layout/ProjectLayout";
import ConversationDetail from "@/components/Conversations/Detail";
import { Separator } from "@/components/ui/Separator";
import { useRouter } from "next/router";

export default function ProjectInbox(props) {
  const router = useRouter();

  const [id, setId] = React.useState("");
  const [isDataLoading, setIsDataLoading] = React.useState(true);
  const [appContent, setAppContent] = React.useState([]);
  const [appearance, setAppearance] = React.useState({});

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

  const fetchContentAppereance = async () => {
    setIsDataLoading(true);
    const response = await fetch(`/api/projects/${router.query.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const appContent = await response.json();
    const tmpData = {
      ...appContent,
      setting: JSON.parse(appContent.setting),
    };

    setAppearance(tmpData);
    setIsDataLoading(false);
  };

  React.useEffect(() => {
    if (router.query.id) {
      fetchContentEntries();
      fetchContentAppereance();
    }
  }, [router.query.id]);

  return (
    <ProjectLayout>
      <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="relative hidden flex-col items-start gap-4 md:flex">
          <div className="flex items-center w-full">
            <div className="flex items-center px-4">
              <h1 className="text-xl font-bold">Inbox</h1>
            </div>
            <div className="bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-2/3 ml-auto">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
          </div>
          <Separator className="bg-gray-200" />
          <div className="h-[calc(100vh-162px)] overflow-auto w-full">
            <MailList
              items={appContent}
              id={id}
              onClick={(value) => setId(value)}
            />
          </div>
        </div>
        <div className="relative flex h-full min-h-[50vh] flex-col bg-muted/50 py-4 pl-4 lg:col-span-2 xl:col-span-4 border-l">
          <ConversationDetail
            id={id}
            appearance={appearance}
            refetch={() => fetchContentEntries()}
          />
        </div>
      </main>
    </ProjectLayout>
  );
}
