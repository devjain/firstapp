import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './Nav.css';

const Nav = () => {
  return (
    <>
        <nav className='navigation  d-flex align-items-center justify-content-between'>
            <ul className='menu  d-flex'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
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