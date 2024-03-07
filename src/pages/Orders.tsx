import DashBoardHeaderBar from "@/components/DashBoardHeaderBar";
import OrderTable from "@/components/orderTable/table";

const Orders = () => {
  return (
    <div>
      <div className="m-3">
        <DashBoardHeaderBar label="Orders" IconName="clipboard"/>
        <OrderTable />
      </div>
    </div>
  );
};

export default Orders;
