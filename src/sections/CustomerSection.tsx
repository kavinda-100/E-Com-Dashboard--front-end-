import LineCarts from "@/components/charts/LineCarts";
import useGetData from "@/customHooks/useGetData";
import { GenerateCustomerStatistics } from "@/lib/utils";
import { CustomerStatisticProps } from "@/types";

const CustomerSection = () => {
  const [dataSetOne, isDataSetOneLoading, isDataSetOneHasError] =
    useGetData<CustomerStatisticProps>(GenerateCustomerStatistics);

    console.log(dataSetOne);
  return (
    <div className="w-full p-2">
      {isDataSetOneLoading && <p>Loading...</p>}
      {isDataSetOneHasError && <p>Something went wrong</p>}
      {dataSetOne && dataSetOne.length === 0 && <p>No data available</p>}
      <h1 className="py-3 text-xl font-semibold text-gray-800 lg:text-2xl dark:text-gray-400">
        Customer Statistics
      </h1>
      <LineCarts
        chartData={dataSetOne}
        dataKeyOne="inComing"
        dataKeyTwo="outGoing"
        labelOne="label"
        aspect={2}
        showCartesianGrid={true}
        />
    </div>
  );
};

export default CustomerSection;
