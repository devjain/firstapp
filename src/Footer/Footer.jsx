import React from 'react';
import './Footer.css';
import { AiFillBank } from "react-icons/ai";
import { FaBlenderPhone, FaEnvelope, FaMapMarker, FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaVk } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className="footer text-center">

        <div className="footer py-5">
            <div className="container py-md-4 UiportfolioFooter">

                <div clss="footer-logo">
                    <a href="#" className='logo'><AiFillBank/> UI Portfolio</a>
                </div>
                
                <div className="footer-contact-info mt-4">

                    <ul>

                        <li>
                            <a href="tel:+12 345 678 900" className="contact-text-sub">
                               <FaBlenderPhone /> +12 345 678 900                        
                            </a>
                        </li>
                        
                        <li>
                            <a href="mailto:info@example.com" className="contact-text-sub">
                                <FaEnvelope /> info@example.com 
                            </a>
                        </li>
                        
                        <li>
                            <p className="contact-text-sub"> 
                               <FaMapMarker /> 208 Avenue street, UK - 62617.</p>
                        </li>
                        
                    </ul>

                </div>
                            
            </div>
        </div>

        <div className="container py-4">
            <div className="row footer-grids">

        
                                        
                    <div className="col-lg-6 copyright text-lg-start text-center align-center">
                        <p className="CopyRights">© 2023 UI Portfolio. All Rights Reserved 
                        </p>
                    </div>
                        


                    <div className="col-lg-6 text-lg-end text-center mt-lg-0 mt-4 FooterSocial">
                    <div className="social">
                        <ul>

                                                                            
                                <li><a href="#"><FaFacebookF /></a></li>
                            
                                                                            
                                <li><a href="#"><FaTwitter /></a></li>
                            

                                                                            
                                <li><a href="#"><FaGooglePlusG /> </a></li>
                            
                                                                            
                                <li><a href="#"><FaPinterestP /></a></li>
                            
                                                                            
                                <li><a href="#"><FaVk /></a></li>
                            

                        </ul>
                    </div>
                </div>
                
            </div>
        </div>

        </footer>
    </>
  )
}

export default Footer