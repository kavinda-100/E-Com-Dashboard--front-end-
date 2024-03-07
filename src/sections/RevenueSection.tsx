import BarCharts from "@/components/charts/BarCharts";
import useGetData from "@/customHooks/useGetData";
import { GenerateRevenueStatistics } from "@/lib/utils";
import { RevenueStatisticProps } from "@/types";

const RevenueSection = () => {
  const [revenueData, isRevenueLoading, isRevenueError] =
    useGetData<RevenueStatisticProps>(() => GenerateRevenueStatistics(false));

  return (
    <div className="w-full p-2">
      {isRevenueLoading && <p>Loading...</p>}
      {isRevenueError && <p>Error fetching data</p>}
      {revenueData && revenueData.length === 0 && <p>No data available</p>}
      <h1 className="py-3 text-xl font-semibold text-gray-800 lg:text-2xl dark:text-gray-400">
        Revenue Statistics
      </h1>
        <BarCharts
          chartData={revenueData}
          dataKeyOne="revenue"
          dataKeyTwo="loss"
          labelOne="label"
          aspect={2}
          showCartesianGrid={false}
        />
    </div>
  );
};

export default RevenueSection;
