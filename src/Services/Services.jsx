import React, { useEffect } from 'react';
import './Services.css';
import Banner from '../components/banner/Banner';

const Services = () => {

  useEffect(() => {
    document.title = 'Services';
  }, []);

  return (
    <div>
      <Banner pagetitle="Services" />
    </div>
  )
}

export default Services