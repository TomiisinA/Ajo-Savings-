import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar"


export const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grow bg-violet-50 min-h-screen p-6">
        <Outlet />
      </div>
    </div>
  );
}
