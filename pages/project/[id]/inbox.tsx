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
      <main className="flex flex-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 h-full">
        <div className="border rounded-xl flex flex-col flex-1 h-full w-1/3">
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Inbox</h1>
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
          <div className="h-[calc(100%-132px)] overflow-auto">
            <MailList
              items={appContent}
              id={id}
              onClick={(value) => setId(value)}
            />
          </div>
        </div>
        <div className="w-2/3">
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
