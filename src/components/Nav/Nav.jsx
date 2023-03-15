import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <>
        <nav className='navigation  d-flex align-items-center justify-content-between'>
            <ul className='menu  d-flex'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <ul className="menu2 d-flex">
                <li><button className='btn btn-primary'>Hire Me</button></li>
                <li><button className='srch'><AiOutlineSearch /></button></li>
                
            </ul>
        </nav>
    </>
  )
}

export default Nav