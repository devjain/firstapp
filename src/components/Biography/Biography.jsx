import React from 'react';
import './Biography.css';
import about from '../../images/about.jpg';
import { FaBehance, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";


const Biography = () => {
  return (
    <>
        <section className="pt-5 pb-5 mt-md-5 mb-md-5 bio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 my-image pe-lg-5 mb-lg-0 mb-md-5 mb-4">
                        <img src={about} alt="" className="rounded img-fluid" />
                    </div>
                    <div className="col-lg-7 w3l-about-info px-lg-4 align-self-center">
                        <h6 className="w3l-title-small mb-1">My Biography</h6>
                        <h3 className="w3l-title-main mb-2">A Lead UI Designer &amp; Web Developer based in UK</h3>
                        <p className="my-4 pe-lg-5">I love Graphic design and Photography and have been working on my portfolio since 2016. I Can give your business a new Creative start right away! Contact me and we will discuss your projects!</p>

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

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Biography