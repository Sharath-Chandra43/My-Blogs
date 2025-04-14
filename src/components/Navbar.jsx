import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='navbar'>
      <h1 className='blog-heading'>My Blog</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/create'> Create New Blog</Link>
      </div>
   </nav>
  )
}

export default Navbar 