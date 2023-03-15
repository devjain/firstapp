import React from 'react';
import './MySkill.css';
import about1 from '../../images/about1.jpg'

const MySkill = () => {
  return (
    <>
        <section className='myskill-sec py-5'>
            <div className="container py-lg-5 py-md-4 py-3">
                <div className="row">
                    <div className="col-md-6 pe-lg-5">
                        <img src={about1} alt="" className='img-fluid rounded' />
                    </div>
                    <div className="col-md-6 w3l-content-6 mt-lg-0 mt-5 px-lg-4 align-self-center">
                        <h6 class="w3l-title-small mb-2">My skills</h6>
                        <h3 class="w3l-title-main">My Featured skills</h3>
                        <p class="mt-4">I Specialize in Branding and Strategy, and am passionate about creating Awesome Portfolio work. And I always ready to impress the audience with my Creativity. </p>
                        <div class="progress-info mt-5">
                            <h6 class="progress-tittle">UI/UX Design</h6>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div class="progress-info">
                            <h6 class="progress-tittle">Ideas &amp; Technology</h6>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{width:"95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div class="progress-info">
                            <h6 class="progress-tittle">Branding Design</h6>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{width:"55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div class="progress-info mb-0">
                            <h6 class="progress-tittle">Responsive Web Design</h6>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MySkill