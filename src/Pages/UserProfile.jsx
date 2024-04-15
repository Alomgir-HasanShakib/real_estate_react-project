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
  console.log(user);
  return (
    <div className="mx-3">
      <Helmet>
        <title>Your Homies | UserProfile</title>
      </Helmet>

      <div className="flex justify-center mt-16">
        <div className="card md:max-w-[450px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://i.postimg.cc/GpQkRJ9S/950-9501315-katie-notopoulos-katienotopoulos-i-write-about-tech-user.jpg"
              }
              alt="userPhoto"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-xl text-primary">
              Name : {user.displayName ? user.displayName : "User"}
            </h2>
            <p className="text-primary text-sm font-semibold ">Email: {user.email}</p>
            <p className="text-primary font-semibold ">User ID : {user.uid}</p>
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
