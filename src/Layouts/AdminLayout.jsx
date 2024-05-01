import { Outlet } from "react-router-dom";
import { CommonNav } from "../components/CommonNav";

export const AdminLayout = () => {
  return (
    <>
      <div>AdminLayout Header</div>
      <CommonNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};
