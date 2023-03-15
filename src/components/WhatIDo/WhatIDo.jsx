import React from 'react';
import './WhatIDo.css';
import { AiOutlineLaptop, AiOutlineSetting, AiOutlineCamera } from "react-icons/ai";

const WhatIDo = () => {
  return (
    <>
        <section className="whatIdo py-lg-5 py-md-4 py-2">
          <div className="container">
              <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
                  <h3 className="w3l-title-main">What I do for you</h3>
              </div>
              <div className="row">
                  <div className="col-md-4">
                    <div className="about-single">
                        <div className="about-icon mb-4">
                            <AiOutlineLaptop />
                        </div>
                        <div className="about-content">
                            <h5 className="mb-3"><a href="#url">Web Development</a></h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-single">
                        <div className="about-icon mb-4">
                            <AiOutlineSetting />
                        </div>
                        <div className="about-content">
                            <h5 className="mb-3"><a href="#url">App Development</a></h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-single">
                        <div className="about-icon mb-4">
                            <AiOutlineCamera />
                        </div>
                        <div className="about-content">
                            <h5 className="mb-3"><a href="#url">Photography</a></h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
            
        </section>
    </>
  )
}

export default WhatIDo