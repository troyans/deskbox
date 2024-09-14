import { cn } from "@/lib/utils";
import { LibraryBig, Palette, SquareTerminal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SidebarChatbot = () => {
  const router = useRouter();

  return (
    <div className="relative hidden flex-col items-start gap-4 md:flex">
      <div className="flex items-center px-4 py-3">
        <h1 className="text-xl font-bold">Chatbot</h1>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link
            href={`/project/${router.query.id}/knowledge`}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
              router.pathname === `/project/[id]/knowledge`
                ? "text-primary bg-muted"
                : "text-muted-foreground"
            )}
          >
            <LibraryBig className="h-4 w-4" />
            Knowledge Base
          </Link>
          <Link
            href={`/project/${router.query.id}/appearance`}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
              router.pathname === `/project/[id]/appearance`
                ? "text-primary bg-muted"
                : "text-muted-foreground"
            )}
          >
            <Palette className="h-4 w-4" />
            Appearance
          </Link>
          <Link
            href={`/project/${router.query.id}/install`}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
              router.pathname === `/project/[id]/install`
                ? "text-primary bg-muted"
                : "text-muted-foreground"
            )}
          >
            <SquareTerminal className="h-4 w-4" />
            Installation
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default SidebarChatbot;
