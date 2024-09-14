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
import { formatDefaultDate, isValidHttpUrl } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/Dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/Pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";

export default function KnowledgeLink(props) {
  const router = useRouter();
  const { toast } = useToast();

  const fileInputRef = useRef(null);

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [appContent, setAppContent] = useState([]);
  const [isUploadLoading, setIsUploadLoading] = useState(false);

  const [url, setUrl] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [appContentLink, setAppContentLink] = useState([]);
  const [openDialogLink, setOpenDialogLink] = useState(false);

  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const dataPaginated = appContentLink.slice(
    perPage * currentPage,
    perPage * (currentPage + 1)
  );
  const numPages = Math.ceil(appContentLink.length / perPage);
  const pagesList = [];

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i);
  }

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    const response = await fetch(`/api/projects/${router.query.id}/links`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const appContent = await response.json();

    if (response.ok) {
      setAppContent(appContent);
    }
    setIsDataLoading(false);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchContentEntries();
    }
  }, [router.query.id]);

  const searchLink = async () => {
    setIsUploadLoading(true);

    try {
      const response = await fetch(
        `/api/projects/${router.query.id}/links/crawler`,
        {
          method: "POST",
          body: JSON.stringify({ url: await url }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAppContentLink(await response.json());
      setOpenDialogLink(true);
      setOpenDialog(false);
      setIsUploadLoading(false);
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

  const crawPage = async (link) => {
    setIsUploadLoading(true);

    try {
      const response = await fetch(
        `/api/projects/${router.query.id}/links/create`,
        {
          method: "POST",
          body: JSON.stringify({ url: await link }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();

      if (response.ok) {
        setOpenDialog(false);
        setUrl("");
        setTimeout(() => {
          fetchContentEntries();
        }, 200);
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            "The content on your URL is too long. Please select another URL",
        });
      }
      setIsUploadLoading(false);
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

  const handleDelete = async (id: string, uploadId: string) => {
    setIsDeleting(true);

    const vecDelete = await fetch(`/api/vector-db/pinecone/delete-data`, {
      method: "DELETE",
      body: JSON.stringify({ namespace: router.query.id, uploadId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (vecDelete.ok) {
      const response = await fetch(
        `/api/projects/${router.query.id}/links/${id}/delete`,
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
      <div className="relative flex h-full min-h-[50vh] flex-col bg-muted/50 py-4 px-4 lg:col-span-2 xl:col-span-4 gap-6">
        <div className="flex">
          <div className="flex flex-col space-y-1.5">
            <CardTitle>Knowledge Base URL</CardTitle>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <AlertDialog open={openDialog}>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  className="h-8 gap-1 text-white"
                  onClick={() => {
                    setUrl("");
                    setOpenDialog(true);
                  }}
                >
                  <PlusCircle className="h-3.5 w-3.5 text-white" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Link
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Input URL</AlertDialogTitle>
                  <div>
                    <div className="mt-4">
                      <Input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
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
                    onClick={async () => {
                      if (url.includes("https") || url.includes("http")) {
                        if (
                          new URL(url).pathname &&
                          new URL(url).pathname !== "/"
                        ) {
                          crawPage(url);
                        } else {
                          await searchLink();
                          setCurrentPage(0);
                        }
                      } else {
                        toast({
                          variant: "destructive",
                          title: "Uh oh! URL must have https or http",
                          description: "Failed! Check you input and try again.",
                        });
                      }
                    }}
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
        {/* Start List Link */}
        <Dialog
          open={openDialogLink}
          onOpenChange={() => setOpenDialogLink(false)}
        >
          <DialogContent className="bg-white overflow-auto max-h-full max-w-2xl">
            <DialogHeader>
              <DialogTitle>List of Link</DialogTitle>
              <div>
                <Table className="mt-4">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Link</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(dataPaginated || [])?.map((item) => {
                      return (
                        <TableRow key={item}>
                          <TableCell className="font-medium">
                            <span className="truncate block max-w-[400px]">
                              {isValidHttpUrl(item)
                                ? item
                                : new URL(item, url).href}
                            </span>
                          </TableCell>
                          <TableCell className="font-medium">
                            <Button
                              aria-haspopup="true"
                              size="sm"
                              variant="default"
                              className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                              onClick={async () => {
                                await setUrl(
                                  isValidHttpUrl(item)
                                    ? item
                                    : new URL(item, url).href
                                );
                                setOpenDialog(true);
                                setOpenDialogLink(false);
                                setTimeout(async () => {
                                  if (
                                    new URL(
                                      isValidHttpUrl(item)
                                        ? item
                                        : new URL(item, url).href
                                    ).pathname &&
                                    new URL(
                                      isValidHttpUrl(item)
                                        ? item
                                        : new URL(item, url).href
                                    ).pathname !== "/"
                                  ) {
                                    await crawPage(
                                      isValidHttpUrl(item)
                                        ? item
                                        : new URL(item, url).href
                                    );
                                  } else {
                                    await searchLink();
                                    setCurrentPage(0);
                                  }
                                }, 200);
                              }}
                            >
                              {new URL(
                                isValidHttpUrl(item)
                                  ? item
                                  : new URL(item, url).href
                              ).pathname &&
                              new URL(
                                isValidHttpUrl(item)
                                  ? item
                                  : new URL(item, url).href
                              ).pathname !== "/"
                                ? "Crawl"
                                : "Search"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                <Pagination className="mt-4">
                  {pagesList.map((page) => {
                    if (page === currentPage) {
                      return (
                        <PaginationContent key={page}>
                          <PaginationItem>
                            <PaginationPrevious
                              className="hover:bg-transparent cursor-pointer"
                              onClick={() =>
                                page > 0 && setCurrentPage(page - 1)
                              }
                            />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              isActive={page === currentPage}
                              className="hover:bg-transparent cursor-pointer"
                            >
                              {page + 1}
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext
                              className="hover:bg-transparent cursor-pointer"
                              onClick={() =>
                                page < pagesList.length - 1 &&
                                setCurrentPage(page + 1)
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      );
                    }
                    return false;
                  })}
                </Pagination>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* End List Link */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Link</TableHead>
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
                  <TableCell className="font-medium">{item.url}</TableCell>
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
