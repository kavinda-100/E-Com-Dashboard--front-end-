import DashBoardHeaderBar from "@/components/DashBoardHeaderBar";
import AreaCharts from "@/components/charts/AreaCharts";
import useGetData from "@/customHooks/useGetData";
import { GenerateChartData } from "@/lib/utils";
import { ChartsProps } from "@/types";

const Sales = () => {
  const [chartData, isChartLoading, isChartError] =
    useGetData<ChartsProps>(GenerateChartData);

  return (
    <div className="w-full p-2">
      {isChartLoading && <p>Loading...</p>}
      {isChartError && <p>Error fetching data</p>}
      {chartData && chartData.length === 0 && <p>No data available</p>}
      <DashBoardHeaderBar label="Sales" IconName="shopping-cart"/>
      <AreaCharts
        chartData={chartData}
        dataKeyOne="products"
        dataKeyTwo="revenue"
        labelOne="label"
        aspect={2}
      />
    </div>
  );
};

export default Sales;
