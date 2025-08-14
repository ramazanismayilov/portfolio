import ClientSidebar from "../components/layout/ClientSidebar";
import { Outlet } from "react-router";
import Profile from "../components/layout/Profile";
import BackgroundCanvas from "../components/common/BackgroundCanvas";

const ClientLayout = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <BackgroundCanvas />
      <div className="relative z-10">
        <ClientSidebar />
        <div className="pl-32 pr-8 py-8">
          <div className="flex items-start min-h-screen">
            <Profile />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
