import { NavBar } from "../components/Navbar/NavBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default AppLayout;
