import { Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Orders,
  Customers,
  Sales,
  Statistics,
  Notification,
  Settings,
} from "@/pages";
import { MainLayout, DashboardLayout } from "@/Layouts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* main routs */}
          <Route index element={<Home />} />
          {/* dashboard routs */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="sales" element={<Sales />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="notification" element={<Notification />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* missing routs */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
