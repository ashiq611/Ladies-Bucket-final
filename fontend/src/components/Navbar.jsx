import { Link, useLocation } from "react-router-dom";
import companyLogo from "../assets/company-logo.png";
import NavSearch from "./NavSearch";
// import { useState } from "react";
import { useSelector} from "react-redux"

const Navbar = () => {
  const location = useLocation();
  const locat=location.pathname

  const {isAuthenticated} = useSelector(state=>state.user) 
  return (
    <div className="navbar bg-[#FBEEF6] border bottom-1 border-[#FF44CB] sticky top-0 z-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
           {isAuthenticated &&  <li>
              <Link to="/account">My Account</Link>
            </li>}
            {isAuthenticated === false && <li>
              <Link to="/login">Login</Link>
            </li>}
            {isAuthenticated === false && <li>
              <Link to="/register">Signup</Link>
            </li>}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost">
          <img
            className="w-20 object-contain"
            src={companyLogo}
            alt="Ladies-Bucket"
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center px-1 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>

          {locat=='/account' ? <li>
            <NavSearch />
          </li> : <>
          {isAuthenticated && <li>
            <Link to="/account">My Account</Link>
          </li>}
          {isAuthenticated===false && <li>
              <Link to="/login">Login</Link>
            </li>}
            {isAuthenticated ===false && <li>
              <Link to="/register">Signup</Link>
            </li>}</>}

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
