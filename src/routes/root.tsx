import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="font-body">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
