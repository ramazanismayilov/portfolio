import { Outlet } from "react-router";
import DashboardSidebar from "../components/layout/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
