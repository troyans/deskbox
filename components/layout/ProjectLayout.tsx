import {
  Bell,
  BotIcon,
  Cat,
  CircleUser,
  CornerDownLeft,
  File,
  FolderLock,
  Home,
  Inbox,
  LineChart,
  Link2,
  Menu,
  MessageCircle,
  Mic,
  Package,
  Package2,
  Paperclip,
  Search,
  ShoppingCart,
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
    <div
      className={cn(
        "grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-white min-h-screen",
        router.asPath.includes("inbox") ? "max-h-screen" : "min-h-screen"
      )}
    >
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href={`/project/${query.id}/dashboard`}
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
                href={`#`}
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
              {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link> */}
              {/* <Link
                href={`/project/${query.id}/history`}
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Chat History
              </Link> */}
              {/* <Link
                href={`/project/${query.id}/link`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Link2 className="h-4 w-4" />
                Links
              </Link> */}
            </nav>
          </div>
        </div>
      </div>
      <div className={"flex flex-col"}>
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
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Chatver</span>
                </Link>
                <Link
                  href={`/project/${query.id}/dashboard`}
                  className={cn(
                    "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground",
                    router.pathname === `/project/[id]/dashboard`
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  <LineChart className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href={`/project/${query.id}/file`}
                  className={cn(
                    "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground",
                    router.pathname === `/project/[id]/file`
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  <File className="h-5 w-5" />
                  Files
                </Link>
                <Link
                  href={`/project/${query.id}/appearance`}
                  className={cn(
                    "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground",
                    router.pathname === `/project/[id]/appearance`
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  <Cat className="h-5 w-5" />
                  Appearance
                </Link>
                {/* <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link> */}
              </nav>
            </SheetContent>
          </Sheet>
          {/* <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div> */}
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
            "flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6",
            router.asPath.includes("inbox") ? "h-[calc(100%-60px)]" : ""
          )}
        >
          {children}
          {/* <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div> */}
          {/* <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div> */}
          {/* <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div className="flex-1" />
            <form
              className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
            >
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
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default ProjectLayout;
