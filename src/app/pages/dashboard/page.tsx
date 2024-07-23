import { NextPage } from "next";

import Chart from "@/components/global/chart/CustomChart";
import Header from "@/components/pages/dashboard/DashboardHeader";
import RecentSales from "@/components/pages/dashboard/RecentSales";
import RestStock from "@/components/pages/dashboard/RestStock";

const Page: NextPage = () => {
  return (
    <div className="grid items-start gap-4 md:gap-6">
      <Header />
      <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
        <div className="col-span-1 lg:col-span-2 grid gap-4 md:gap-6">
          <Chart />
          <RestStock />
        </div>
        <div className="lg:col-span-1">
          <RecentSales />
        </div>
      </div>
    </div>
  );
};

export default Page;
