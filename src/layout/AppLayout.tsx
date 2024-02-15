import { NavBar } from "../components/Navbar/NavBar";
import { Outlet } from "react-router-dom";

const AppLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default AppLayout;
