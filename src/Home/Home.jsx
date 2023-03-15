import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner';
import Biography from '../components/Biography/Biography'
import MySkill from '../components/MySkill/MySkill';
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
        <Banner pagetitle="Home" />
        <Biography />
        <WhatIDo />
        <MySkill />
        <WhyChooseus />
        <States />
        <MyWork />
        
    </>
  )
}

export default Home