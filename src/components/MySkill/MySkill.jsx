import React from 'react';
import './MySkill.css';
import about1 from '../../images/about1.jpg'


const MySkill = (props) => {
  return (
    <>
        <section className='myskill-sec py-5'>
            <div className="container py-lg-5 py-md-4 py-3">
                <div className="row">
                    <div className="col-md-6 pe-lg-5">
                        <img src={about1} alt="" className='img-fluid rounded' />
                    </div>
                    <div className="col-md-6 w3l-content-6 mt-lg-0 mt-5 px-lg-4 align-self-center">
                        <h6 className="w3l-title-small mb-2">My skills</h6>
                        <h3 className="w3l-title-main">My Featured skills</h3>
                        <p className="mt-4">I Specialize in Branding and Strategy, and am passionate about creating Awesome Portfolio work. And I always ready to impress the audience with my Creativity. </p>
                        
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MySkill