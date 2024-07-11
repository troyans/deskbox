import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  LibraryBig,
  MoreHorizontal,
  Palette,
  PlusCircle,
  SquareTerminal,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import Router, { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog";
import { Input } from "@/components/ui/Input";
import { v4 as uuidv4 } from "uuid";
import { cn, formatDefaultDate } from "@/lib/utils";
import ProjectLayout from "@/components/layout/ProjectLayout";
import { useToast } from "@/components/ui/Toast/use-toast";
import Link from "next/link";

export default function ProjectFile(props) {
  const router = useRouter();
  const { toast } = useToast();

  const fileInputRef = useRef(null);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [appContent, setAppContent] = useState([]);
  const [isUploadLoading, setIsUploadLoading] = useState(false);

  const [files, setFiles] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    const response = await fetch(`/api/projects/${router.query.id}/files`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const appContent = await response.json();

    setAppContent(appContent);
    setIsDataLoading(false);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchContentEntries();
    }
  }, [router.query.id]);

  const handleFileChange = async () => {
    setIsUploadLoading(true);
    const uploadId = uuidv4();
    const formData = new FormData();

    files.forEach((file: File, index: number) => {
      formData.append(`file${index}`, file);

      const appContentEntry = {
        uploadId,
        fileName: file.name,
        namespace: router.query.id,
        createdAt: new Date(),
      };

      formData.append(
        `namespace${index}`,
        Array.isArray(router.query.id) ? router.query.id[0] : router.query.id
      );
      formData.append(`uploadId${index}`, appContentEntry.uploadId);
      formData.append(`filename${index}`, appContentEntry.fileName);
    });

    try {
      const response = await fetch("/api/vector-db/pinecone/upload-data", {
        method: "POST",
        body: formData,
      });

      await response.json();

      await files.forEach(async (file: File) => {
        await createContentEntry({
          uploadId,
          fileName: file.name,
        });
      });

      fileInputRef.current.value = "";
      setOpenDialog(false);
      setIsUploadLoading(false);
      toast({
        variant: "success",
        title: "Yeay! Update success.",
        description: "Success! Update project successfully.",
      });
      setTimeout(() => {
        fetchContentEntries();
      }, 200);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed! Check you input and try again.",
      });
      console.error("Error uploading files:", error);
      setIsUploadLoading(false);
    }
  };

  async function createContentEntry(data) {
    const response = await fetch(
      `/api/projects/${router.query.id}/files/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  }

  const handleDelete = async (id: string, uploadId: string) => {
    setIsDeleting(true);

    const vecDelete = await fetch(
      `/api/vector-db/pinecone/vectorDelete?uploadId=${uploadId}`,
      { method: "DELETE" }
    );

    if (vecDelete.ok) {
      const response = await fetch(
        `/api/projects/${router.query.id}/files/${id}/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsDeleting(false);

      if (response.ok) {
        fetchContentEntries();
      }
    } else {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <ProjectLayout>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="relative hidden flex-col items-start gap-4 md:flex">
            <div className="flex items-center px-4 py-3">
              <h1 className="text-xl font-bold">Chatbot</h1>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  href={`/project/${router.query.id}/file`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                    router.pathname === `/project/[id]/file`
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
          <div className="relative flex h-full min-h-[50vh] flex-col bg-muted/50 py-4 pl-4 lg:col-span-2 xl:col-span-4 border-l gap-6">
            <div className="flex">
              <div className="flex flex-col space-y-1.5">
                <CardTitle>Chatbot Knowledge Base</CardTitle>
                <CardDescription>
                  Manage your knowledge base and view their response.
                </CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Filter
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Active
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Archived
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Export
                    </span>
                  </Button> */}
                <AlertDialog open={openDialog}>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      className="h-8 gap-1 text-white"
                      onClick={() => setOpenDialog(true)}
                    >
                      <PlusCircle className="h-3.5 w-3.5 text-white" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add File
                      </span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Upload File</AlertDialogTitle>
                      <div>
                        <div className="mt-4">
                          <Input
                            type="file"
                            accept=".pdf, .txt, .docx, .csv, .json"
                            name="file"
                            ref={fileInputRef}
                            onChange={(e) =>
                              setFiles(Array.from(e.target.files))
                            }
                          />
                        </div>
                      </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        onClick={() => setOpenDialog(false)}
                        className="hover:bg-gray-100"
                      >
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleFileChange()}
                        disabled={isUploadLoading}
                        className="text-white"
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>File</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Created at
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(appContent || [])?.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        {item.fileName.replace(/\.[^/.]+$/, "")}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.fileName.split(".").pop()}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {formatDefaultDate(new Date(item.createdAt))}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                              className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-white">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              className="hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                              onClick={() =>
                                handleDelete(item.id, item.uploadId)
                              }
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <div className="text-xs text-muted-foreground hidden">
              Showing <strong>1-10</strong> of <strong>32</strong> products
            </div>
          </div>
        </main>
      </ProjectLayout>
    </>
  );
}
