"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Trash, Upload, X } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  file: z
    .instanceof(File, { message: "A contract file is required" })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "File size must be 20MB or less",
    })
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "text/plain",
        ].includes(file.type),
      { message: "Invalid file type. Allowed: PDF, DOC, DOCX, TXT" }
    ),
});

type FormData = z.infer<typeof formSchema>;

export function UploadContractDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", file: undefined },
  });

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        form.setValue("file", acceptedFiles[0]);
      }
    },
    [form]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    setOpen(false);
  };

  const UploadForm = ({ className }: { className?: string }) => (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid gap-6", className)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a descriptive title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={() => (
            <FormItem>
              <FormControl>
                <div
                  {...getRootProps({
                    className:
                      "border border-black/20 rounded-lg p-8 text-center cursor-pointer bg-muted/10 h-[250px] flex flex-col items-center justify-center hover:bg-muted/70 transition-colors",
                  })}
                >
                  <input {...getInputProps()} />
                  <Upload className="h-12 w-12 mb-2 text-muted-foreground mx-auto" />
                  {isDragActive ? (
                    <p>Drop the file here...</p>
                  ) : (
                    <div>
                      <p className="text-sm">
                        Drag and drop a contract file here, or click to upload
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supports PDF, DOC, DOCX, TXT
                      </p>
                    </div>
                  )}
                </div>
              </FormControl>
              {form.getValues("file") && (
                <div className="mt-2 flex items-center justify-between rounded border p-2">
                  <span className="text-sm truncate max-w-xs">
                    {form.getValues("file")?.name}
                  </span>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    className="hover:bg-red-100"
                    onClick={() => form.setValue("file", undefined as any)}
                  >
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <div
          className={cn("flex justify-end gap-2", !isDesktop && "min-w-full")}
        >
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className={!isDesktop ? "hidden" : ""}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className={!isDesktop ? "w-full" : ""}
          >
            Analyse Contract
          </Button>
        </div>
      </form>
    </Form>
  );

  if (isDesktop) {
    return (
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent
          className="sm:max-w-[600px]"
          showCloseButton={false}
        >
          <DialogHeader className="flex flex-row justify-between items-center !py-0">
            <DialogTitle>Upload Contract</DialogTitle>
            <DialogClose asChild>
              <Button
                variant="ghost"
                className="hover:bg-black/10"
              >
                <X />
              </Button>
            </DialogClose>
          </DialogHeader>
          <Separator />
          <UploadForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Upload Contract</DrawerTitle>
        </DrawerHeader>
        <UploadForm className="px-4" />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
