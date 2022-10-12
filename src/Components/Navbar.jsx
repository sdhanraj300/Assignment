import React from 'react'
import './Navbar.css';
import logo from '../Assets/Logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-bar">
        <img src={logo} alt="" className='logo' /> 
        <div className="cards">
        <ul>
        <li>Wedding Cards</li>
        <li>Birthday Cards</li>
        <li>Feeling Cards</li>
        <li>Anniversary Cards</li>
        </ul>
        </div>  
        <div className="login">
        <ul>
        <li>Login |</li>
        <li>&#160; Sign Up</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
