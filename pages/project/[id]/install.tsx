import * as React from "react";
import { CopyIcon, LibraryBig, Palette, SquareTerminal } from "lucide-react";

import { useRouter } from "next/router";
import ProjectLayout from "@/components/layout/ProjectLayout";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast/use-toast";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SidebarChatbot from "@/components/sidebar/chatbot";

export default function ProjectInstall(props) {
  const router = useRouter();
  const { toast } = useToast();

  const [isDataLoading, setIsDataLoading] = React.useState(true);
  const [intercom, setIntercom] = React.useState("");

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    const response = await fetch(`/api/projects/${router.query.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const appContent = await response.json();

    if (response.ok) {
      setIntercom(JSON.parse(appContent.setting)?.intercom || "");
    }

    setIsDataLoading(false);
  };

  React.useEffect(() => {
    if (router.query.id) {
      fetchContentEntries();
    }
  }, [router.query.id]);

  const copylink = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      variant: "success",
      title: "Yeay! your code is copied.",
    });
  };

  return (
    <ProjectLayout>
      <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <SidebarChatbot />
        <div className="relative flex h-full min-h-[50vh] flex-col bg-muted/50 py-4 pl-4 lg:col-span-2 xl:col-span-4 border-l gap-6">
          <div className="flex gap-6 flex-col">
            <div className="flex-auto max-w-4xl">
              <p className="mb-4 text-sm leading-6 font-semibold text-primary">
                Installation
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                Install Deskbox in Your Website
              </h1>
            </div>
            <div className="mb-6 col-span-2 xl:mb-0">
              <div className="prose prose-slate prose-sm dark:prose-dark">
                <p className="text-sm">
                  Please insert code below between {"<body>"} and {"</body>"}
                </p>
              </div>
            </div>
            <div className="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
              <div className="relative flex text-slate-400 text-xs leading-6">
                <div className="absolute top-2 right-0 h-8 flex items-center pr-4 z-10">
                  <div className="relative flex -mr-2">
                    <Button
                      type="button"
                      className="text-slate-500 hover:text-slate-400 cursor-pointer hover:bg-primary"
                      variant="ghost"
                      onClick={() =>
                        copylink(`<script>
  (function (w,d,s,o,f,js,fjs) {
    w['Deskbox-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'mw', '${process.env.NEXTAUTH_URL}/js/widget.js'));
  mw('init', { projectId: '${router.query.id}' ${intercom ? ", workspaceId: '" + intercom + "'" : ""}});
</script>`)
                      }
                    >
                      <CopyIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <pre className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                  <code className="flex-none min-w-full p-5">
                    <span className="flex">
                      <span className="flex-auto">
                        {`<script>
  (function (w,d,s,o,f,js,fjs) {
    w['Deskbox-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'mw', '${process.env.NEXTAUTH_URL}/js/widget.js'));
  mw('init', { projectId: '${router.query.id}' ${intercom ? ", workspaceId: '" + intercom + "'" : ""}});
</script>`}
                      </span>
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProjectLayout>
  );
}
