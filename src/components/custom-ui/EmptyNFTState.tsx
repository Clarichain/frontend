"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Wallet } from "lucide-react";

const variant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const EmptyNftState = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variant}
    >
      <Card className="py-20">
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          <div className="size-[50px] rounded-full bg-neutral-gray/10 flex justify-center items-center">
            <Wallet />
          </div>
          <div>
            <h4 className="text-[20px] font-medium text-center mb-2">
              No NFT Contracts Yet
            </h4>
            <p className="text-[16px] font-manrope max-w-[400px] text-center text-balance text-neutral-gray">
              When you completed contract signing, they’ll be minted as NFTs and
              appear here. Your encrypted contracts will be securely stored on
              the blockchain.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
