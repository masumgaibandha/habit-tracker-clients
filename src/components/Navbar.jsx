import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import { Link, NavLink } from "react-router";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";

const Navbar = () => {
  const { user, setUser, signOutFunc, loading, setLoading } =
    useContext(AuthContext);

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Sign Out Successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  console.log(user);
  

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyLink to={"/"}>Home</MyLink>{" "}
              </li>
              <li>
                {" "}
                <MyLink to={"/publichabits"}>Browse Public Habits</MyLink>{" "}
              </li>
              {user && (
                <li>
                  <MyLink to={"/addhabit"}>Add Habit</MyLink>{" "}
                </li>
              )}
              {user && (
                <li>
                  {" "}
                  <MyLink to={"/myhabits"}>My Habits</MyLink>{" "}
                </li>
              )}
              
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2 text-xl">
            <img
              src="https://i.ibb.co/yF5QRccH/logo.jpg"
              alt="HabitFlow Logo"
              className="w-12"
            />
            <span>HabitFlow</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-[18px] flex items-center gap-4">
            <li>
              <MyLink to={"/"}>Home</MyLink>{" "}
            </li>
            <li>
              {" "}
              <MyLink to={"/publichabits"}>Browse Public Habits</MyLink>{" "}
            </li>
            {user && (
              <li>
                <MyLink to={"/addhabit"}>Add Habit</MyLink>{" "}
              </li>
            )}
            {user && (
              <li>
                {" "}
                <MyLink to={"/myhabits"}>My Habits</MyLink>{" "}
              </li>
            )}
            
          </ul>
        </div>

        {loading ? (
          <BounceLoader color="#2ce1dc" />
        ) : user ? (
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-11 rounded-full">
                <img
                  src={user?.photoURL || "https://i.ibb.co/8LRrxWQR/Masum2.png"}
                  alt={user?.displayName || user?.email}
                />
              </div>
            </div>

            <div
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] w-60 rounded-box bg-base-100 shadow-sm p-3 space-y-2 text-center left-1/2 -translate-x-1/2"
            >
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <p className="text-sm text-gray-700">{user?.email}</p>
              <button
                onClick={handleSignOut}
                className="my-btn cursor-pointer w-full h-8"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/signin"
              className="h-10 px-5 flex items-center justify-center cursor-pointer
                 border border-[#6A75FF] text-[#6A75FF] rounded-xl 
                 hover:bg-[#6A75FF] hover:text-white transition"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="my-btn h-10 px-5 flex items-center justify-center cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
