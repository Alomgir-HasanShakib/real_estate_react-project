import Navbar from "../Components/Navbar";
import {Outlet} from "react-router-dom";

const Root = () => {
  
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
