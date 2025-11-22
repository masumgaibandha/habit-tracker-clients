import React from 'react'
import MyContainer from './MyContainer'
import { Link, NavLink } from 'react-router'

const Navbar = () => {

  // const {user} = use(AuthContext);
  // const links = <>
  //     <li><NavLink to='/'>Home</NavLink></li>
  //     <li><NavLink to='/addhabit'>Add Habit</NavLink></li>
  //     <li><NavLink to='/myhabits'>My Habits</NavLink></li>    
  //     <li><NavLink to='/browsepublicHabits'>Browse Public Habits</NavLink></li>
  //     <li><NavLink to='/register'>Register</NavLink></li>
      
  
  // </>


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer className="flex justify-between items-center ">
  <div className="">
    <div className="dropdown">
      {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div> */}
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {/* {links} */}
      </ul>
    </div>
    <div className='flex items-center'>
      <img src="https://i.ibb.co/yF5QRccH/logo.jpg" alt="" className='w-12' />
    <a className="btn btn-ghost text-xl">HabitFlow</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-[18px]">
      <li>
        <NavLink to={'/'} className={({isActive}) => isActive? "text-primary font-bold" : ""}>Home</NavLink>
        </li>
      <li>
        <NavLink to={'/addhabit'} className={({isActive}) => isActive? "text-primary font-bold" : ""}>Add Habit</NavLink>
        </li>
      <li>
        <NavLink to={'/myhabits'} className={({isActive}) => isActive? "text-primary font-bold" : ""}>My Habits</NavLink>
        </li>
      <li>
        <NavLink to={'/publichabits'} className={({isActive}) => isActive? "text-primary font-bold" : ""}>Browse Public Habits</NavLink>
        </li>
      <li>
        <NavLink to={'/profile'} className={({isActive}) => isActive? "text-primary font-bold" : ""}>Profile</NavLink>
        </li>



    </ul>
  </div>
  

    <button className='my-btn'>
      <Link to='/register'>Login</Link>
    </button>
      </MyContainer>
    </div>
  )
}

export default Navbar
