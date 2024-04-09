import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
              border: isActive ? "1px solid #135D66" : "",
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
              border: isActive ? "1px solid #135D66" : "",
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
              border: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Contact
        </NavLink>
      </li>
      <li className="text-[18px] font-semibold">
        <NavLink
          to="/profile-up"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#135D66" : "black",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #135D66" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Update Profile
        </NavLink>
      </li>
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
          </ul>
        </div>
        <a className="font-bold text-2xl text-[#135D66]">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <div className="avatar mr-4">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <Link to='/signup'><a className="btn bg-darker text-white font-bold hover:bg-transparent hover:border-[#135D66] hover:text-[#135D66] px-8">
          Log In
        </a></Link>
      </div>
    </div>
  );
};

export default Navbar;
