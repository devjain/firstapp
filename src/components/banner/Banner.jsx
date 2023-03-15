import React from 'react'
import bannerImg from '../../images/banner1.jpg';
import bannerPic from '../../images/bannerPic.png'
import './Banner.css'
const Banner = () => {
  return (
    <>
        <section className="banner position-relative">
            <div className="bannerInner">
                <img src={bannerImg} />
            </div>
            <div className="bannerContent">
                <div className="container">
                    <div className="row justify-content-start">
                    <div class="col-lg-7 banner-info-grid pt-5 HomePageHeroHeader">
                            <h3 class="mb-3">Hi, I'm Devendra Jain</h3>
                            <h1 class="mb-4"> Frontend Developer </h1>
                            <p>I love Graphic design and Photography and have been working on my portfolio since 2016. I Can give your business a new Creative start right away!</p>
                            
                            <a class="btn btn-primary mt-5 me-2" href="#url"> Hire Me </a>
                            <a class="btn transparent-btn mt-5" href="#url"> My Portfolio </a>
                            
                        </div>
                        <div class="col-5">
                            <img src={bannerPic} alt="" className="img-fluid" style={{width:'100%'}}  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner