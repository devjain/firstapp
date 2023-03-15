import React from 'react';
import './MyWork.css';
import blog1 from '../../images/blog1.jpg'
import blog2 from '../../images/blog2.jpg'
import blog3 from '../../images/blog3.jpg'
import blog4 from '../../images/blog4.jpg'
import blog5 from '../../images/blog5.jpg'
import blog6 from '../../images/blog6.jpg'


const MyWork = () => {
  return (
    <>
        <section class="w3-gallery py-5" id="portfolio">
    <div class="container py-lg-5 py-md-4 py-2 HomePageGallery">

        <div class="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
            <h3 class="w3l-title-main mb-2">My Success Work</h3>
        </div>

        <div class="row portfolio-area clearfix p-0 m-0">
            
            <div class="col-lg-4 col-md-6 portfolio-item2 content">
                <span class="image-block">
                    <a href="#">
                        <div class="content-overlay"></div>
                        <img src={blog6} class="img-fluid w3layouts rounded" alt="portfolio-img" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Architecture</h3>
                            <p class="content-text">This is a short description</p>
                        </div>
                    </a>
                </span>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item2 content mt-md-0 mt-4">
                <span class="image-block">
                    <a href="#">
                        <div class="content-overlay"></div>
                        <img src={blog1} class="img-fluid w3layouts rounded" alt="portfolio-img" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Corporate</h3>
                            <p class="content-text">This is a short description</p>
                        </div>
                    </a>
                </span>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item2 content mt-lg-0 mt-4">
                <span class="image-block">
                    <a href="#">
                        <div class="content-overlay"></div>
                        <img src={blog2} class="img-fluid w3layouts rounded" alt="portfolio-img" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Ecommerce</h3>
                            <p class="content-text">This is a short description</p>
                        </div>
                    </a>
                </span>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item2 content mt-4">
                <span class="image-block">
                    <a href="#">
                        <div class="content-overlay"></div>
                        <img src={blog3} class="img-fluid w3layouts rounded" alt="portfolio-img" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Mobile UI</h3>
                            <p class="content-text">This is a short description</p>
                        </div>
                    </a>
                </span>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item2 content mt-4">
                <span class="image-block">
                    <a href="#">
                        <div class="content-overlay"></div>
                        <img src={blog4} class="img-fluid w3layouts rounded" alt="portfolio-img" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Fashion</h3>
                            <p class="content-text">This is a short description</p>
                        </div>
                    </a>
                </span>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item2 content mt-4">
                <span class="image-block">
                    <a href="#">
                        <div class="content-overlay"></div>
                        <img src={blog5} class="img-fluid w3layouts rounded" alt="portfolio-img" />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Real Estate </h3>
                            <p class="content-text">This is a short description</p>
                        </div>
                    </a>
                </span>
            </div>

        </div>
       
    </div>
   
</section>
    </>
  )
}

export default MyWork