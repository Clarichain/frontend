"use client"
import React from "react";
import { UploadContractDialog } from "./UploadButton";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const ResponsiveUploadButton = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <UploadContractDialog>
      {!isDesktop ? (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Plus size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Upload Contract</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <Button className="bg-primary text-white hover:bg-primary/90 py-5 flex gap-2">
          <Plus size={18} />
          Upload Contract
        </Button>
      )}
    </UploadContractDialog>
  );
};

export default ResponsiveUploadButton;
