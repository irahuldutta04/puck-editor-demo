import { Outlet } from "react-router-dom";
import { CommonNav } from "../components/CommonNav";

export const SuperAdminLayout = () => {
  return (
    <>
      <div>SuperAdminLayout</div>
      <CommonNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};
