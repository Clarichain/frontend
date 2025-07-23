import { EmptyNftState } from "@/components/custom-ui/EmptyNFTState";
import WalletAddress from "@/components/custom-ui/WalletAddress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { RefreshCw, Shield, Wallet } from "lucide-react";

const Page = () => {
  return (
    <div className="main-content">
      <div className="space-y-6">
        {/* Wallet Info Header */}
        <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2">
          <div>
            <h3 className="font-semibold text-[24px] sm:text-[28px]">
              Wallets
            </h3>
            <p className="text-[15px] font-manrope text-muted-foreground">
              View your NFT contracts and manage your digital assets.
            </p>
          </div>
        </div>

        {/* Wallet Card */}
        <Card>
          <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5">
            <div className="flex items-center gap-3">
              <div className={cn("rounded-md p-2 bg-primary")}>
                <Wallet className="text-white" />
              </div>
              <div className="space-y-1">
                <h4 className="text-[14px] font-semibold font-manrope">
                  Cardano Wallet
                </h4>
                <WalletAddress />
              </div>
            </div>

            <div className="text-left sm:text-right max-sm:ml-auto">
              <h4 className="text-[20px] font-semibold">0</h4>
              <p className="text-[14px] font-manrope text-neutral-gray">
                NFT Contracts
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* NFT Contracts Section */}
      <div className="space-y-6 mt-10">
        <div className="flex flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              NFT Contracts
            </h1>
            <p className="text-[14px] sm:text-[15px] font-manrope max-w-[500px] text-balance mt-1 text-muted-foreground">
              We store and protect Contracts as NFTs, giving each one a secure
              and verifiable digital record.
            </p>
          </div>

          <div className="flex max-sm:flex-col gap-3 items-center">
            {/* Tooltip with shield icon only for mobile */}
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-1 items-center sm:hidden text-success">
                    <Shield size={16} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Encrypted & Secured</TooltipContent>
              </Tooltip>

              {/* Normal text version for larger screens */}
              <div className="hidden sm:flex gap-2 items-center animate-pulse">
                <Shield
                  className="text-success"
                  size={14}
                />
                <p className="font-manrope text-[14px] font-medium">
                  Encrypted & Secured
                </p>
              </div>
            </TooltipProvider>

            {/* Refresh Button */}
            <Button
              size="icon"
              variant="outline"
              className="text-primary border-primary hover:bg-primary/10"
            >
              <RefreshCw size={16} />
              <span className="sr-only">Refresh</span>
            </Button>
          </div>
        </div>

        <EmptyNftState />
      </div>
    </div>
  );
};

export default Page;
