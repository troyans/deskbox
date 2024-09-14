import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { CardTitle } from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { useRouter } from "next/router";
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
import { useToast } from "@/components/ui/Toast/use-toast";
import { webRequest } from "@/lib/axios";
import { Progress } from "../ui/Progress";

export default function KnowledgeFile() {
  const router = useRouter();
  const { toast } = useToast();

  const fileInputRef = useRef(null);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [appContent, setAppContent] = useState([]);
  const [isUploadLoading, setIsUploadLoading] = useState(false);

  const [files, setFiles] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [progress, setProgress] = useState(null);

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    webRequest
      .get(`/api/projects/${router.query.id}/files`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setAppContent(res.data);
        setIsDataLoading(false);
      })
      .catch(() => {
        setIsDataLoading(false);
      });
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

    webRequest
      .post("/api/vector-db/pinecone/upload-data", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      })
      .then(async (res) => {
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
        setProgress(null);
        setTimeout(() => {
          fetchContentEntries();
        }, 200);
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed! Check you input and try again.",
        });
        console.error("Error uploading files:", error);
        setIsUploadLoading(false);
      });
  };

  async function createContentEntry(data) {
    webRequest
      .post(`/api/projects/${router.query.id}/files/create`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  const handleDelete = async (id: string, uploadId: string) => {
    setIsDeleting(true);

    webRequest
      .delete(`/api/vector-db/pinecone/delete-data`, {
        data: { namespace: router.query.id, uploadId },
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        webRequest
          .delete(`/api/projects/${router.query.id}/files/${id}/delete`, {
            headers: { "Content-Type": "application/json" },
          })
          .then(() => {
            setIsDeleting(false);
            fetchContentEntries();
          })
          .catch((error) => {
            setIsDeleting(false);
            toast({
              variant: "destructive",
              title: error.response.data.message,
              description: error.response.data.error,
            });
          });
      })
      .catch((error) => {
        setIsDeleting(false);
        toast({
          variant: "destructive",
          title: error.response.data.message,
          description: error.response.data.error,
        });
      });
  };

  return (
    <>
      <div className="relative flex h-full min-h-[50vh] flex-col bg-muted/50 py-4 px-4 lg:col-span-2 xl:col-span-4 gap-6">
        <div className="flex">
          <div className="flex flex-col space-y-1.5">
            <CardTitle>Knowledge Base File</CardTitle>
          </div>
          <div className="ml-auto flex items-center gap-2">
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
                        onChange={(e) => setFiles(Array.from(e.target.files))}
                      />
                      {progress && <Progress value={progress} />}
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
              <TableHead className="hidden md:table-cell">Created at</TableHead>
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
                          onClick={() => handleDelete(item.id, item.uploadId)}
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
    </>
  );
}
