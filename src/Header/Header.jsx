import React from 'react';
import Nav from '../components/Nav/Nav';
import { AiFillBank } from "react-icons/ai";
import './Header.css'

const Header = () => {
  return (
    <>
        <header id='header' className="fixed-top">
            <div className="container">
              <div className="innerHeader d-flex align-items-center justify-content-between">
                <a href="#" className='logo'><AiFillBank/> UI Portfolio</a>
                <Nav/>
              </div>
            </div>
        </header>
    </>
  )
}

export default Header