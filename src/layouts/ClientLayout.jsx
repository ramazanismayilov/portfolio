import ClientSidebar from "../components/layout/ClientSidebar";
import { Outlet } from "react-router";
import Profile from "../components/layout/Profile";
import BackgroundCanvas from "../components/common/BackgroundCanvas";

export const ClientLayout = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundCanvas />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-10">
        <div className="flex items-center gap-6">
          <ClientSidebar />
          <Profile />
          <main className="flex-[2]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
