import React, { useEffect } from 'react';
import './About.css';
import Banner from '../components/banner/Banner';
const About = () => {

  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <div>
      <Banner pagetitle="About" />
    </div>
  )
}

export default About