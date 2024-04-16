import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Contexts/Authentication/Authentication";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="flex justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="mx-3">
      <Helmet>
        <title>Your Homies | UserProfile</title>
      </Helmet>

      <div className="flex justify-center mt-16 px-3">
        <div className="card max-w-80  md:max-w-[450px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://i.postimg.cc/GpQkRJ9S/950-9501315-katie-notopoulos-katienotopoulos-i-write-about-tech-user.jpg"
              }
              alt="userPhoto"
              className="max-h-56"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-xl text-primary">
              Name : {user.displayName ? user.displayName : "User"}
            </h2>
            <p className="text-primary text-sm font-semibold ">Email: <span className="text-gray-400"> {user.email}</span></p>
            <p className="text-primary text-sm font-semibold ">User ID :<span className="text-gray-400"> {user.uid}</span></p>
            <p className="text-primary text-sm font-semibold "> Photo Url : <span className="text-gray-400 link"> {user.photoURL.slice(0,23)}</span>....</p>
            <div className=" mt-10">
              <Link to="/">
                {" "}
                <button className="btn btn-primary w-full text-lighten bg-primary hover:border-primary hover:text-primary hover:bg-transparent">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
