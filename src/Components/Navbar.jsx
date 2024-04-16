import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/Authentication/Authentication";
import Logo from "../assets/logo.png";

import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  // authentication context import here

  const { user, logOut, loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // log out functionality here
  const handleLogout = () => {
    logOut().then(() => toast.success("Log out successfull "));
  };
  // navigation links here
  const navLink = (
    <>
      <li className="text-[18px] font-semibold">
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#135D66" : "black",
              background: isActive ? "transparent" : "",
              borderBottom: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="text-[18px] font-semibold">
        <NavLink
          to="/about"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#135D66" : "black",
              background: isActive ? "transparent" : "",
              borderBottom: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          About
        </NavLink>
      </li>

      <li className="text-[18px] font-semibold">
        <NavLink
          to="/contact"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#135D66" : "black",
              background: isActive ? "transparent" : "",
              borderBottom: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li className="text-[18px] font-semibold">
          <NavLink
            to="/profile-up"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#135D66" : "black",
                background: isActive ? "transparent" : "",
                borderBottom: isActive ? "1px solid #135D66" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Update Profile
          </NavLink>
        </li>
      )}
      {user && (
        <li className="text-[18px] font-semibold">
          <NavLink
            to="/user-profile"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#135D66" : "black",
                background: isActive ? "transparent" : "",
                borderBottom: isActive ? "1px solid #135D66" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            User Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
            {user && (
              <button onClick={handleLogout}>
                <a className="btn bg-darker text-white font-bold hover:bg-transparent hover:border-[#135D66] hover:text-[#135D66] px-8">
                  Log out
                </a>
              </button>
            )}
          </ul>
        </div>
        <a className="font-bold text-2x">
          <img className="w-[150px]" src={Logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <div className="avatar mr-4 tooltip" data-tip={`${user.displayName}`}>
            <div className="w-12 rounded-full tooltip">
              <button>
                {" "}
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.postimg.cc/GpQkRJ9S/950-9501315-katie-notopoulos-katienotopoulos-i-write-about-tech-user.jpg"
                  }
                />
              </button>
            </div>
          </div>
          <button onClick={handleLogout} className="md:flex hidden">
            <a className="btn bg-darker text-white font-bold hover:bg-transparent hover:border-[#135D66] hover:text-[#135D66] px-8">
              Log out
            </a>
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn bg-darker text-white font-bold hover:bg-transparent hover:border-[#135D66] hover:text-[#135D66] px-8">
              Log In
            </a>
          </Link>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Navbar;
