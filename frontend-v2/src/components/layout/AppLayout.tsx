import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
};
