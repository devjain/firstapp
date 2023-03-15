import React from 'react';
import './Footer.css';
import { AiFillBank } from "react-icons/ai";
import { FaBlenderPhone, FaEnvelope, FaMapMarker, FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaVk } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer class="footer text-center">

        <div class="footer py-5">
            <div class="container py-md-4 UiportfolioFooter">

                <div clss="footer-logo">
                    <a href="#" className='logo'><AiFillBank/> UI Portfolio</a>
                </div>
                
                <div class="footer-contact-info mt-4">

                    <ul>

                        <li>
                            <a href="tel:+12 345 678 900" class="contact-text-sub">
                               <FaBlenderPhone /> +12 345 678 900                        
                            </a>
                        </li>
                        
                        <li>
                            <a href="mailto:info@example.com" class="contact-text-sub">
                                <FaEnvelope /> info@example.com 
                            </a>
                        </li>
                        
                        <li>
                            <p class="contact-text-sub"> 
                               <FaMapMarker /> 208 Avenue street, UK - 62617.</p>
                        </li>
                        
                    </ul>

                </div>
                            
            </div>
        </div>

        <div class="container py-4">
            <div class="row footer-grids">

        
                                        
                    <div class="col-lg-6 copyright text-lg-start text-center align-center">
                        <p class="CopyRights">© 2023 UI Portfolio. All Rights Reserved 
                        </p>
                    </div>
                        


                    <div class="col-lg-6 text-lg-end text-center mt-lg-0 mt-4 FooterSocial">
                    <div class="social">
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