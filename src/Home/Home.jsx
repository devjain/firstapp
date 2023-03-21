import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner';
import Biography from '../components/Biography/Biography';
import BiographyDetail from '../components/Biography/BiographyDetail';
import MySkill from '../components/MySkill/MySkill';
import SkillGraph from '../components/MySkill/SkillGraph';
import MyWork from '../components/MyWork/MyWork';
import States from '../components/States/States';
import WhatIDo from '../components/WhatIDo/WhatIDo';
import WhyChooseus from '../components/WhyChooseus/WhyChooseus';


const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
        <Banner 
          pagetitle="Home" 
          imgsrc="https://picsum.photos/id/0/1760/1166" 
          postTitle="Frontend Developer"
          postDesc="I love Graphic design and Photography and have been working on my portfolio since 2016. I Can give your business a new Creative start right away!"
          bannerPic="./img/bannerPic.png"
          banerCaption="bannerContent left"
        >
          <a className="btn btn-primary mt-5 me-2" href="#url"> Hire Me </a>
          <a className="btn transparent-btn mt-5" href="#url"> My Portfolio </a>
        </Banner>
        <Biography 
          smallTitle="My Biography"
          mailTitle="A Lead UI Designer &amp; Web Developer based in UK"
          para="I love Graphic design and Photography and have been working on my portfolio since 2016. I Can give your business a new Creative start right away! Contact me and we will discuss your projects!"
        >
          <BiographyDetail />
        </Biography>
        <WhatIDo />
        <MySkill>
          <SkillGraph />
        </MySkill>
        <WhyChooseus />
        <States />
        <MyWork />
        
    </>
  )
}

export default Home