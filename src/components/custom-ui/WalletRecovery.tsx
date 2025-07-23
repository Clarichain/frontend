import { Download, Key, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

export function WalletRecovery() {
  return (
    <Card>
      <CardHeader className="!flex flex-row gap-2">
        <Key className="text-primary size-[24px]" />
        <p className="text-[17px] font-medium bg-card">Wallet Recovery</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <Card className="rounded-md bg-light-bg border-primary flex justify-between">
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Wallet className="text-primary" />
              <div className="space-y-1">
                <h4 className="text-[16px] font-semibold font-manrope">
                  Wallet Address
                </h4>
                <p className="text-[14px] font-medium font-manrope w-full max-md:max-w-[150px] truncate">
                  addr12fsrgdfdbgfhd23csfsf43dfdaffdgvgerg5vddvfghfgsdfff4v2
                </p>
              </div>
            </div>
            <Button
              variant={"outline"}
              className="status-indicator minted-status hover:bg-primary/10 hover:text-primary"
            >
              Copy Address
            </Button>
          </CardContent>
        </Card>
        <Card className="rounded-md bg-light-bg border-warning flex justify-between">
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Download className="text-warning" />
              <div className="space-y-1">
                <h4 className="text-[16px] font-semibold font-manrope">
                  Export Wallet Backup
                </h4>
                <p className="text-[14px] font-medium font-manrope">
                  Download your wallet backup for recovery purposes
                </p>
              </div>
            </div>
            <Button
              variant={"outline"}
              className="status-indicator pending-status hover:bg-warning/10 hover:text-warning"
            >
              Export
            </Button>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
