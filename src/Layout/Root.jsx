import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto min-h-[90vh]">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
