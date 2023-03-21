import React from 'react';
import { FaBehance, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const BiographyDetail = () => {
  return (
   
         <>
        <div className="my-info mt-4">

        <div className="single-info"><span>Name:</span>
            <p>John Watson</p>
        </div>

        <div className="single-info"><span>From:</span>
            <p>London, UK</p>
        </div>

        <div className="single-info"><span>Email:</span>
            <p><a href="mailto:example@mail.com">example@mail.com</a></p>
        </div>

        <div className="single-info"><span>Phone:</span>
            <p><a href="tel:+21 234 567 8901">+21 234 567 8901</a></p>
        </div>

        </div>

        <ul className="follow-social mt-lg-5 mt-4">
        <li>
            <h5 className="me-md-3">Follow me on </h5>
        </li>

        <li><a href="url">
            <FaBehance /></a>
        </li>

        <li><a href="url">
            <FaLinkedinIn /></a>
        </li>

        <li><a href="url">
                <FaFacebookF /></a>
        </li>

        <li><a href="url">
            <FaTwitter /></a>
        </li>

        </ul>

        <div className="w3l-btn">
        <a href="#url" className="btn btn-style btn-primary mt-lg-5 mt-4 me-md-2">Hire me</a>
        <a href="#url" className="btn btn-style btn-secondary mt-lg-5 mt-4">Download CV</a>
        </div>
    </>
   
  )
}

export default BiographyDetail