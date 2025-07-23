"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Upload } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { UploadContractDialog } from "./UploadButton";
import { useMediaQuery } from "@/hooks/use-media-query";

const variant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const EmptyStateCard = () => {
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variant}
    >
      <Card className="py-16 sm:py-20">
        <CardContent className="flex flex-col items-center justify-center space-y-4 px-4">
          <div className="size-[45px] sm:size-[50px] rounded-full bg-neutral-gray/10 flex justify-center items-center">
            <FileText
              className="text-muted-foreground"
              size={isMobile ? 20 : 24}
            />
          </div>

          <div className="text-center space-y-1">
            <h4 className="text-[18px] sm:text-[20px] font-medium">
              No Contracts Yet
            </h4>
            <p className="text-[14px] sm:text-[16px] font-manrope text-neutral-gray text-balance max-w-[320px] sm:max-w-[400px] mx-auto">
              Get started by uploading your first contract. Our AI will analyze
              it and help you manage the signing process.
            </p>
          </div>

          <UploadContractDialog>
            {isMobile ? (
              <Button
                size="sm"
                className="text-[13px] flex gap-1 items-center bg-primary text-white hover:bg-primary/90 mt-2"
              >
                <Upload size={14} />
                Upload
              </Button>
            ) : (
              <Button className="bg-primary text-white hover:bg-primary/90 mt-2">
                Upload Your First Contract
              </Button>
            )}
          </UploadContractDialog>
        </CardContent>
      </Card>
    </motion.div>
  );
};
