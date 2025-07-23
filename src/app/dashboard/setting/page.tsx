import { ChangePasswordForm } from "@/components/custom-ui/ChangePasswordForm";
import { DeleteAccount } from "@/components/custom-ui/DeleteAccount";
import { ProfileInformationForm } from "@/components/custom-ui/ProfileInformationForm";
import { WalletRecovery } from "@/components/custom-ui/WalletRecovery";

const page = () => {
  return (
    <section className="main-content">
      <div className="space-y-6">
        <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2">
          <div>
            <h3 className="font-semibold text-[24px] sm:text-[28px]">
              Settings
            </h3>
            <p className="text-[15px] font-manrope text-muted-foreground">
              Manage your accounts, security and preferences
            </p>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="space-y-12">
          <ProfileInformationForm />
          <ChangePasswordForm />
          <WalletRecovery />
          <DeleteAccount/>
        </div>
      </div>
    </section>
  );
};

export default page;
