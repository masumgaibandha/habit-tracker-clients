import React from 'react'
import MyContainer from './MyContainer'
import { Link, NavLink } from 'react-router'
import MyLink from './MyLink'

const Navbar = () => {

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
  

    <button className='my-btn'>
      <Link to='/signin'>Sign In</Link>
    </button>
      </MyContainer>
    </div>
  )
}

export default Navbar

