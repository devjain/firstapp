import React, { useEffect } from 'react';
import './About.css';
import Banner from '../components/banner/Banner';
import Biography from '../components/Biography/Biography';
import SkillGraph from '../components/MySkill/SkillGraph';


const About = () => {

  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <div>
      <Banner 
        pagetitle="ABOUT US" 
        imgsrc="https://picsum.photos/id/1/1366/400" 
        banerCaption="bannerContent center" 

      />
      <Biography 
          smallTitle="ABOUT ME"
          mailTitle="A Few Words About Me"
          para="I love Graphic design and Photography and have been working on my portfolio since 2016. I Can give your business a new Creative start right away! Contact me and we will discuss your projects!"
          
      >
        <SkillGraph />
      </Biography>
      
     
    </div>
  )
}

export default About