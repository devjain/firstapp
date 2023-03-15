import React, { useEffect } from 'react';
import './Contact.css';
import Banner from '../components/banner/Banner';
const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us';
  }, []);
  return (
    <div>
      <Banner pagetitle="Contact Us" />
    </div>
  )
}

export default Contact