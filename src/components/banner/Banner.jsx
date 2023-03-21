import React from 'react'
// import bannerImg from '../../images/banner1.jpg';
// import bannerPic from '../../images/bannerPic.png'
import './Banner.css'
const Banner = (props) => {
  return (
    <>
        <section className="banner position-relative">
            <div className="bannerInner">
                <img src={props.imgsrc} />
            </div>
            <div className={props.banerCaption}>
                <div className="container">
                    <div className="row justify-content-start">
                    <div className="col-lg-7 banner-info-grid pt-5 HomePageHeroHeader">
                            <h3 className="mb-3">{props.pagetitle}</h3>
                            <h1 className="mb-4"> {props.postTitle} </h1>
                            <p>{props.postDesc}</p>
                            
                            {props.children}
                            
                        </div>
                        <div className="col-5">
                            <img src={props.bannerPic} alt="" className="img-fluid" style={{width:'100%'}}  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner