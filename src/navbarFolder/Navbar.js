import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
       
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
       
        
      </nav>
    </div>
  )
}

export default Navbar
