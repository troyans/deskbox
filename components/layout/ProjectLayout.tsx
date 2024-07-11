import {
  AreaChart,
  Bell,
  Bird,
  Book,
  Bot,
  BotIcon,
  Cat,
  CircleUser,
  Code2,
  CornerDownLeft,
  File,
  FolderLock,
  Home,
  Inbox,
  LifeBuoy,
  LineChart,
  Link2,
  Menu,
  MessageCircle,
  Mic,
  Package,
  Package2,
  Paperclip,
  Rabbit,
  Search,
  Settings,
  Settings2,
  ShoppingCart,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import { Input } from "../ui/Input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { Label } from "../ui/Label";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/Tooltip";
import { Textarea } from "../ui/Textarea";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/Collapsible";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/Drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

const ProjectLayout = ({ children }) => {
  const { query } = useRouter();
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  return (
    <>
      {/* <div
        className={cn(
          "grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-white min-h-screen",
          router.asPath.includes("inbox") ||
            router.asPath.includes("appearance")
            ? "max-h-screen"
            : "min-h-screen"
        )}
      >
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link
                href={`/project/${query.id}/inbox`}
                className="flex items-center gap-2 font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="">Chatver</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href={`/project/${query.id}/inbox`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                    router.pathname === `/project/[id]/inbox`
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  <Inbox className="h-4 w-4" />
                  Inbox
                </Link>
                <Collapsible
                  open={
                    router.pathname === `/project/[id]/file` ||
                    router.pathname === `/project/[id]/appearance` ||
                    router.pathname === `/project/[id]/install` ||
                    open
                  }
                >
                  <CollapsibleTrigger
                    className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
                    onClick={() => setOpen(!open)}
                  >
                    <BotIcon className="h-4 w-4" />
                    Chatbot
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-7">
                    <Link
                      href={`/project/${query.id}/file`}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                        router.pathname === `/project/[id]/file`
                          ? "text-primary bg-muted"
                          : "text-muted-foreground"
                      )}
                    >
                      Knowledge Base
                    </Link>
                    <Link
                      href={`/project/${query.id}/appearance`}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                        router.pathname === `/project/[id]/appearance`
                          ? "text-primary bg-muted"
                          : "text-muted-foreground"
                      )}
                    >
                      Appearance
                    </Link>
                    <Link
                      href={`/project/${query.id}/install`}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                        router.pathname === `/project/[id]/install`
                          ? "text-primary bg-muted"
                          : "text-muted-foreground"
                      )}
                    >
                      Installation
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Link
                  href={`/project/${query.id}/report`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                    router.pathname === `/project/[id]/report`
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  <FolderLock className="h-4 w-4" />
                  Report
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col",
            router.asPath.includes("inbox") ||
              router.asPath.includes("appearance")
              ? "max-h-screen"
              : ""
          )}
        >
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col bg-white">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href={`/project/${query.id}/inbox`}
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Chatver</span>
                  </Link>
                  <Link
                    href={`/project/${query.id}/inbox`}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                      router.pathname === `/project/[id]/inbox`
                        ? "text-primary bg-muted"
                        : "text-muted-foreground"
                    )}
                  >
                    <Inbox className="h-4 w-4" />
                    Inbox
                  </Link>
                  <Collapsible
                    open={
                      router.pathname === `/project/[id]/file` ||
                      router.pathname === `/project/[id]/appearance` ||
                      router.pathname === `/project/[id]/install` ||
                      open
                    }
                  >
                    <CollapsibleTrigger
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
                      onClick={() => setOpen(!open)}
                    >
                      <BotIcon className="h-4 w-4" />
                      Chatbot
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-7">
                      <Link
                        href={`/project/${query.id}/file`}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                          router.pathname === `/project/[id]/file`
                            ? "text-primary bg-muted"
                            : "text-muted-foreground"
                        )}
                      >
                        Knowledge Base
                      </Link>
                      <Link
                        href={`/project/${query.id}/appearance`}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                          router.pathname === `/project/[id]/appearance`
                            ? "text-primary bg-muted"
                            : "text-muted-foreground"
                        )}
                      >
                        Appearance
                      </Link>
                      <Link
                        href={`/project/${query.id}/install`}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                          router.pathname === `/project/[id]/install`
                            ? "text-primary bg-muted"
                            : "text-muted-foreground"
                        )}
                      >
                        Installation
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>
                  <Link
                    href={`/project/${query.id}/report`}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                      router.pathname === `/project/[id]/report`
                        ? "text-primary bg-muted"
                        : "text-muted-foreground"
                    )}
                  >
                    <FolderLock className="h-4 w-4" />
                    Report
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="ml-auto">
                <Button variant="default" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5 text-white" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
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
          </header>
          <main
            className={cn(
              "flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 h-[calc(100%-60px)]"
            )}
          >
            {children}
          </main>
        </div>
      </div> */}
      <div className="grid h-screen w-full pl-[56px]">
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b p-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Home"
              className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
            >
              <Triangle className="size-5 fill-foreground" />
            </Button>
          </div>
          <nav className="grid gap-1 p-2">
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
                  <Inbox className="size-5" />
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
                    (router.pathname === `/project/[id]/file` ||
                      router.pathname === `/project/[id]/appearance` ||
                      router.pathname === `/project/[id]/install`) &&
                      "bg-primary text-white"
                  )}
                  aria-label="Chatbot"
                  onClick={() => router.push(`/project/${query.id}/file`)}
                >
                  <Bot className="size-5" />
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
                  <AreaChart className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5} className="bg-white">
                Report
              </TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto grid gap-1 p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg hover:bg-primary hover:text-white"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
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
                    <SquareUser className="size-5" />
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
            <h1 className="text-xl font-semibold">Chatver</h1>
          </header>
          {children}
          {/* <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative hidden flex-col items-start gap-8 md:flex"></div>
            <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <Badge variant="outline" className="absolute right-3 top-3">
                Output
              </Badge>
              <div className="flex-1" />
              <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                  <Button type="submit" size="sm" className="ml-auto gap-1.5">
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </form>
            </div>
          </main> */}
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
