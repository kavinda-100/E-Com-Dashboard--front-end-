import AreaCharts from "@/components/charts/AreaCharts";
import useGetData from "@/customHooks/useGetData";
import { GenerateSalesStatistics } from "@/lib/utils";
import { SalesStatisticProps } from "@/types";

const SalesSection = () => {
  const [chartData, isChartLoading, isChartError] =
    useGetData<SalesStatisticProps>(GenerateSalesStatistics);

  return (
    <div className="w-full p-2">
      {isChartLoading && <p>Loading...</p>}
      {isChartError && <p>Error fetching data</p>}
      {chartData && chartData.length === 0 && <p>No data available</p>}
      <h1 className="py-3 text-xl font-semibold text-gray-800 lg:text-2xl dark:text-gray-400">
        Sales Statistics
      </h1>
      <AreaCharts
        chartData={chartData}
        dataKeyOne="products"
        dataKeyTwo="revenue"
        labelOne="label"
        aspect={2}
        showCartesianGrid={false}
      />
    </div>
  );
};

export default SalesSection;