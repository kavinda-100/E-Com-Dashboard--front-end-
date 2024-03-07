import { columns } from "@/components/orderTable/columns";
import useGetData from "@/customHooks/useGetData";
import { GenerateOrderData } from "@/lib/utils";
import { OrderData } from "@/types";
import { DataTable } from "@/components/DataTable";

const OrderTable = () => {
  const [orderData, isOrderDataLoading, isOrderError] =
    useGetData<OrderData>(GenerateOrderData);

  return (
    <div className=" container">
      {isOrderDataLoading ? (
        <p>Loading...</p>
      ) : isOrderError ? (
        <p>Error</p>
      ) : (
        <DataTable columns={columns} data={orderData} />
      )}
    </div>
  );
};

export default OrderTable;
