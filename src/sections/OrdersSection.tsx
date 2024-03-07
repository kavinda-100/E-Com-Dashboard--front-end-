import LineCarts from "@/components/charts/LineCarts";
import useGetData from "@/customHooks/useGetData";
import { GenerateOrderStatistics } from "@/lib/utils";
import { OrderStatisticProps } from "@/types";

const OrdersSection = () => {
  const [ordersData, isOrderLoading, isOrderError] =
    useGetData<OrderStatisticProps>(GenerateOrderStatistics);
  return (
    <div className="w-full p-2">
      {isOrderLoading && <p>Loading...</p>}
      {isOrderError && <p>Error fetching data</p>}
      {ordersData && ordersData.length === 0 && <p>No data available</p>}
      <h1 className="py-3 text-xl font-semibold text-gray-800 lg:text-2xl dark:text-gray-400">
        Order Statistics
      </h1>
      <LineCarts
        chartData={ordersData}
        dataKeyOne="orders"
        dataKeyTwo="revenue"
        labelOne="label"
        aspect={2}
        showCartesianGrid={false}
      />
    </div>
  );
};

export default OrdersSection;
