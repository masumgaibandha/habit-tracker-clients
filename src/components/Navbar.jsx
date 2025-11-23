import React, { useContext } from 'react'
import MyContainer from './MyContainer'
import { Link, NavLink } from 'react-router'
import MyLink from './MyLink'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'

const Navbar = () => {
  const {user, setUser, signOutFunc} = useContext(AuthContext)

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
  console.log(user)
  // const {user} = use(AuthContext);
  // const links = <>
  //     <li><MyLink to={'/'}>Home</MyLink> </li>
  //       <li><MyLink to={'/addhabit'}>Add Habit</MyLink> </li>
  //       <li> <MyLink to={'/myhabits'}>My Habits</MyLink> </li>
  //       <li> <MyLink to={'/publichabits'}>Browse Public Habits</MyLink> </li>
  //       <li> <MyLink to={'/profile'}>Profile</MyLink></li>
      
  
  // </>


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer className="flex justify-between items-center ">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><MyLink to={'/'}>Home</MyLink> </li>
        <li><MyLink to={'/addhabit'}>Add Habit</MyLink> </li>
        <li> <MyLink to={'/myhabits'}>My Habits</MyLink> </li>
        <li> <MyLink to={'/publichabits'}>Browse Public Habits</MyLink> </li>
        <li> <MyLink to={'/profile'}>Profile</MyLink></li>
        {/* {links} */}
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
        <li><MyLink to={'/'}>Home</MyLink> </li>
        <li><MyLink to={'/addhabit'}>Add Habit</MyLink> </li>
        <li> <MyLink to={'/myhabits'}>My Habits</MyLink> </li>
        <li> <MyLink to={'/publichabits'}>Browse Public Habits</MyLink> </li>
        <li> <MyLink to={'/profile'}>Profile</MyLink></li>
        {/* {links} */}
        </ul>
  </div>

    {user ? (
  <div className="dropdown dropdown-bottom">
    {/* Avatar button (trigger) */}
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

    {/* Dropdown card, centered under avatar */}
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
  <button className="my-btn h-10 w-25">
    <Link to="/signin">Sign In</Link>
  </button>
)}
    
      </MyContainer>
    </div>
  )
}

export default Navbar

