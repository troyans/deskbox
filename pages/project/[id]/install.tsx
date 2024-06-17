import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import MailList from "@/components/Conversations/List";
import ConversationDetail from "@/components/Conversations/Detail";
import { Separator } from "@/components/ui/Separator";
import { useRouter } from "next/router";
import PublicLayout from "@/components/layout/PublicLayout";
import ProjectLayout from "@/components/layout/ProjectLayout";

export default function ProjectInstall() {
  const router = useRouter();
  return (
    <ProjectLayout>
      <pre className="language-js">
        <code className="language-js">
          {`<script>
        (function (w,d,s,o,f,js,fjs) {
            w['Chatver-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
        }(window, document, 'script', 'mw', './widget.js'));
        mw('init', { projectId: ${router.query.id} });
    </script>`}
        </code>
      </pre>
    </ProjectLayout>
  );
}
