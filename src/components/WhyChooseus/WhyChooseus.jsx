import React from 'react';
import './WhyChooseus.css';
import { FaCss3Alt, FaWordpressSimple,FaChartLine,FaHeadset, FaMobileAlt, FaLayerGroup  } from "react-icons/fa";
import bannerPic from '../../images/bannerPic.png';


const WhyChooseus = () => {
  return (
    <>
        <section className="w3l-whychooseus pt-5" id="about1">
    <div className="container pt-lg-0 pt-md-4 pt-2 HomePageFeaturesWithPhoto">
        <div className="row align-items-center">
            <div className="col-lg-7 pe-lg-5 align-items-center">

                <div className="row two-grids">

                                             
                    <div className="col-sm-6 grids_info d-flex">
                        <FaWordpressSimple />
                        <div className="detail ms-3">
                            <h4 className="w3l-subtitle">Web Development</h4>
                            <p>Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.</p>
                        </div>
                    </div>
                    
                                                 
                    <div className="col-sm-6 grids_info d-flex mt-sm-0 mt-4">
                        <FaCss3Alt />
                        <div className="detail ms-3">
                            <h4 className="w3l-subtitle">Design Trends</h4>
                            <p>Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.</p>
                        </div>
                    </div>
                    
                                           
                    <div className="col-sm-6 grids_info d-flex mt-md-5 mt-4">
                        <FaChartLine />
                        <div className="detail ms-3">
                            <h4 className="w3l-subtitle">Research &amp; Analysis</h4>
                            <p>Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.</p>
                        </div>
                    </div>
                    
                                          
                    <div className="col-sm-6 grids_info d-flex mt-md-5 mt-4">
                        <FaHeadset />
                        <div className="detail ms-3">
                            <h4 className="w3l-subtitle">Customer support</h4>
                            <p>Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.</p>
                        </div>
                    </div>
                    
                                          
                    <div className="col-sm-6 grids_info d-flex mt-md-5 mt-4">
                        <FaMobileAlt />
                        <div className="detail ms-3">
                            <h4 className="w3l-subtitle">Responsive design</h4>
                            <p>Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.</p>
                        </div>
                    </div>
                    
                                          
                    <div className="col-sm-6 grids_info d-flex mt-md-5 mt-4">
                        <FaLayerGroup />
                        <div className="detail ms-3">
                            <h4 className="w3l-subtitle">PSD Design</h4>
                            <p>Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="col-lg-5 ps-lg-5 my-image mt-lg-0 mt-4">
                <img src={bannerPic} alt="" className="img-fluid" />
            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default WhyChooseus