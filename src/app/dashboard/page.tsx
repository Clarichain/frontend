
import ResponsiveUploadButton from "@/components/custom-ui/ResponsiveUploadButton";
import { Button } from "@/components/ui/button";
import { EmptyStateCard } from "../../components/custom-ui/EmptyStateCard";
import { StatCard, StatCardProps } from "../../components/custom-ui/StatCard";

const stats: Omit<StatCardProps, "index">[] = [
  {
    title: "Total Contracts",
    value: "0",
    textColorClass: "text-primary",
    backgroundColorClass: "bg-primary/15",
    icon: "file-text",
  },
  {
    title: "Signed",
    value: "0",
    textColorClass: "text-success",
    backgroundColorClass: "bg-success/15",
    icon: "check-circle",
  },
  {
    title: "Pending",
    value: "0",
    textColorClass: "text-warning",
    backgroundColorClass: "bg-warning/15",
    icon: "clock",
  },
  {
    title: "Drafts",
    value: "0",
    textColorClass: "text-neutral-gray",
    backgroundColorClass: "bg-neutral-gray/15",
    icon: "file-edit",
  },
];

const DashboardPage = () => {

  return (
    <div className="main-content">
      <div className="space-y-7">
        <div className="flex flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-medium text-dark-text">
              Welcome back{" "}
              <span className="font-semibold text-[24px] sm:text-[28px]">
                SubSahara
              </span>
            </h3>
            <p className="text-[14px] sm:text-[16px] font-manrope">
              Manage your contracts and agreements.
            </p>
          </div>

          <ResponsiveUploadButton/>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-5 sm:gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              {...stat}
              index={i}
            />
          ))}
        </div>
      </div>
      <div className="space-y-6 mt-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Recent Contracts
            </h1>
            <p className="text-[14px] sm:text-[15px] font-manrope max-w-[500px] text-balance mt-1 text-muted-foreground">
              Keep track of your most recent contracts — whether signed,
              pending, or still in draft. Quickly review their statuses at a
              glance.
            </p>
          </div>

            <Button
              variant="outline"
              className="text-[14px] border-primary text-primary hover:bg-primary/10"
            >
              Refresh
            </Button>
        </div>

        <EmptyStateCard />
      </div>
    </div>
  );
};

export default DashboardPage;
