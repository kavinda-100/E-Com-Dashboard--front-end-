import DashBoardHeaderBar from "@/components/DashBoardHeaderBar";
import CustomerTable from "@/components/customerTable/table";

const Customers = () => {
  return (
    <div className="w-full">
      <div className="m-3">
      <DashBoardHeaderBar label="Customers" IconName="users"/>
        <CustomerTable />
      d</div>
    </div>
  );
};

export default Customers;
