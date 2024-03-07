import { columns } from "@/components/customerTable/columns";
import useGetData from "@/customHooks/useGetData";
import { GenerateCustomerData } from "@/lib/utils";
import { CustomerData } from "@/types";
import { DataTable } from "@/components/DataTable";

const OrderTable = () => {
  const [customerData, isCustomerDataLoading, isCustomerError] =
    useGetData<CustomerData>(GenerateCustomerData);

  return (
    <div className=" container">
      {isCustomerDataLoading ? (
        <p>Loading...</p>
      ) : isCustomerError ? (
        <p>Error</p>
      ) : (
        <DataTable columns={columns} data={customerData} />
      )}
    </div>
  );
};

export default OrderTable;