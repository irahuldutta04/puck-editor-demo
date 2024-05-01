import { Outlet } from "react-router-dom";
import { CommonNav } from "../components/CommonNav";

export const RootLayout = () => {
  return (
    <>
      <div>RootLayout Header</div>
      <CommonNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};
