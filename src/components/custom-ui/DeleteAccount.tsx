import { Trash, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

export function DeleteAccount() {
  return (
    <Card>
      <CardHeader className="!flex flex-row gap-2">
        <Trash className="text-error size-[24px]" />
        <p className="text-[17px] font-medium bg-card">Delete Account</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <Card className="rounded-md bg-error/10 border-error flex justify-between">
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Trash2 className="text-error" />
              <div className="space-y-1">
                <h4 className="text-[16px] font-semibold font-manrope">
                  Delete Account
                </h4>
                <p className="text-[14px] font-medium font-manrope">
                  Permanently erase your account and all associated data. This
                  cannot be undone.
                </p>
              </div>
            </div>
            <Button className="bg-error hover:bg-error/40 rounded">Delete Account</Button>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
