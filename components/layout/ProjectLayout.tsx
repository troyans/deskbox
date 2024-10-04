import { AreaChart, Bot, Inbox, LifeBuoy, SquareUser } from "lucide-react";
import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/Tooltip";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const ProjectLayout = ({ children }) => {
  const { query } = useRouter();
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (status === "authenticated" && !data.user.isOnboard) {
      router.push("/onboarding");
    }
  }, [status]);

  return (
    <>
      <div className="grid h-screen w-full pl-[56px]">
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b p-2 mx-auto">
            <img src="/logo.svg" alt="Deskbox" className="w-10" />
          </div>
          <nav className="grid gap-1 p-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-lg bg-muted hover:bg-primary hover:text-white",
                    router.pathname === `/project/[id]/inbox` &&
                      "bg-primary text-white"
                  )}
                  aria-label="Inbox"
                  onClick={() => router.push(`/project/${query.id}/inbox`)}
                >
                  <Inbox className="size-5" strokeWidth="1.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5} className="bg-white">
                Inbox
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-lg bg-muted hover:bg-primary hover:text-white",
                    (router.pathname === `/project/[id]/knowledge` ||
                      router.pathname === `/project/[id]/appearance` ||
                      router.pathname === `/project/[id]/install`) &&
                      "bg-primary text-white"
                  )}
                  aria-label="Chatbot"
                  onClick={() => router.push(`/project/${query.id}/knowledge`)}
                >
                  <Bot className="size-5" strokeWidth="1.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5} className="bg-white">
                Chatbot
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-lg bg-muted hover:bg-primary hover:text-white",
                    router.pathname === `/project/[id]/report` &&
                      "bg-primary text-white"
                  )}
                  aria-label="Report"
                  onClick={() => router.push(`/project/${query.id}/report`)}
                >
                  <AreaChart className="size-5" strokeWidth="1.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5} className="bg-white">
                Report
              </TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto grid gap-1 p-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg hover:bg-primary hover:text-white"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" strokeWidth="1.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 mt-auto rounded-lg hover:bg-primary hover:text-white"
                    aria-label="Account"
                  >
                    <SquareUser className="size-5" strokeWidth="1.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="left" className="bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                      Support
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                      onClick={async () => {
                        await signOut();
                        router.push("/");
                      }}
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col">
          <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4 bg-white">
            <h1 className="text-xl font-semibold">Deskbox</h1>
          </header>
          {children}
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
