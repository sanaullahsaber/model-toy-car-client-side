import React from "react";
import logo from "../../../assets/logo/mtc-logo.png";
import { FaRegUser } from "react-icons/fa";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h6 className="text-center">Free shipping on all orders over $200.</h6>

      <div className="bg-rose-700">
        <div className="max-w-7xl mx-auto ">
          <div className="navbar py-8">
            <div className="flex-1">
              {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
              <Link to='/'>
              <img src={logo} alt="" />
              </Link>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div>
                    <FaRegUser className="w-8 h-8"></FaRegUser>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav></Nav>
    </>
  );
};

export default Navbar;
