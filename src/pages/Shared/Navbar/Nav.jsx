import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './nav.css'

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/all-toys">All Toys</Link>
                  </li>
                  <div >
                    {user ? (
                      <>
                        <li>
                          <Link to="/my-toys">My Toys</Link>
                        </li>
                        <li>
                          <Link to="/add-toy">Add a Toy</Link>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                  </div>

                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                ShopByCategory
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/all-toys">All Toys</Link>
                </li>
                <div style={{ display: "flex" }}>
                  {user ? (
                    <>
                      <li style={{ marginRight: "1rem" }}>
                        <Link to="/my-toys">My Toys</Link>
                      </li>
                      <li>
                        <Link to="/add-toy">Add a Toy</Link>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div>
                {user ? (
                  <div className="profile-wrapper">
                    <img
                      className="rounded-full h-10"
                      src={user.photoURL}
                      alt="Profile"
                    />
                    <div className="tooltip">{user.displayName}</div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* login and logout */}
              <div>
                <a className="">
                  {user ? (
                    <Link onClick={handleLogOut}>Logout</Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
