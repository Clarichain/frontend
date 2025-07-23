'use client'
import React, { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Copy } from 'lucide-react';

const WalletAddress = () => {
   const [copied, setCopied] = useState(false);

   const handleCopy = () => {
     navigator.clipboard.writeText("addr12...vf30");
     setCopied(true);
     setTimeout(() => setCopied(false), 2000);
   };
  return (
    <div className="flex items-center gap-2">
      <div className="bg-title rounded px-2 py-[2px] font-manrope text-[12px] font-medium">
        addr12...vf30
      </div>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger onClick={handleCopy}>
           {!copied ? <Copy
              className="cursor-pointer text-neutral-gray hover:text-neutral-gray/80"
              size={14}
            /> : <p className='text-[12px] text-neutral-gray'>Copied!</p>}
          </TooltipTrigger>
          <TooltipContent>{copied ? "Copied!" : "Copy address"}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default WalletAddress