import DashBoardHeaderBar from "@/components/DashBoardHeaderBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CustomersSection,
  OrdersSection,
  RevenueSection,
  SalesSection,
} from "@/sections";

const Statistics = () => {
  return (
    <div className="w-full p-3">
      <DashBoardHeaderBar label="Statistics" IconName="bar-chart"/>
      <Tabs defaultValue="revenue" className="w-full">
        <TabsList className="w-[300px]">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue">
          <div className="w-full">
            <RevenueSection />
          </div>
        </TabsContent>
        <TabsContent value="orders">
          <div className="w-full">
            <OrdersSection />
          </div>
        </TabsContent>
        <TabsContent value="sales">
          <div className="w-full">
            <SalesSection />
          </div>
        </TabsContent>
        <TabsContent value="customers">
          <div className="w-full">
            <CustomersSection />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Statistics;
