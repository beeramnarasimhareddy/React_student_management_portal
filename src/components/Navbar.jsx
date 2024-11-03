import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./styling/Navbar.css"

const Navbar = () => {
  return (
    <div className='Nav'>
      <NavLink to='/' >Dashboard</NavLink>
      <NavLink to='/registration'>Registration</NavLink>
      <NavLink to='/students'>StudentDetails</NavLink>
      <Outlet/>
    </div>
  )
}

export default Navbar
