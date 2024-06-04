import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MoreHorizontal, PlusCircle } from "lucide-react";
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
import { formatDefaultDate } from "@/lib/utils";
import ProjectLayout from "@/components/layout/ProjectLayout";
import { useToast } from "@/components/ui/Toast/use-toast";

export default function ProjectFile() {
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
        createdAt: new Date(),
      };

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

      fetchContentEntries();
      fileInputRef.current.value = "";
      setOpenDialog(false);
      setIsUploadLoading(false);
      toast({
        variant: "success",
        title: "Yeay! Update success.",
        description: "Success! Update project successfully.",
      });
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
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <Card>
            <CardHeader>
              <div className="flex">
                <div className="flex flex-col space-y-1.5">
                  <CardTitle>Files</CardTitle>
                  <CardDescription>
                    Manage your files and view their sales performance.
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
                        className="h-8 gap-1"
                        onClick={() => setOpenDialog(true)}
                      >
                        <PlusCircle className="h-3.5 w-3.5" />
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
                        <AlertDialogCancel onClick={() => setOpenDialog(false)}>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleFileChange()}
                          disabled={isUploadLoading}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
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
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="bg-white"
                            >
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem
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
            </CardContent>
            <CardFooter className="hidden">
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
        </main>
      </ProjectLayout>
    </>
  );
}
