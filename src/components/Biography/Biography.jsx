import React from 'react';
import './Biography.css';
import about from '../../images/about.jpg';


const Biography  = (props) => {
  return (
    <>
        <section className="pt-5 pb-5 mt-md-5 mb-md-5 bio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 my-image pe-lg-5 mb-lg-0 mb-md-5 mb-4">
                        <img src={about} alt="" className="rounded img-fluid" />
                    </div>
                    <div className="col-lg-7 w3l-about-info px-lg-4 align-self-center">
                        <h6 className="w3l-title-small mb-1">{props.smallTitle}</h6>
                        <h3 className="w3l-title-main mb-2">{props.mailTitle}</h3>
                        <p className="my-4 pe-lg-5">{props.para}</p>

                        {props.children}

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Biography