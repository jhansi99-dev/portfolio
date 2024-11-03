// src/components/Preloader.js
import React from 'react';
import './Preloader.css'; // Optional: Add styles here
import preloader from '../../assets/pre.svg';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="Loading..." />
    </div>
  );
}

export default Preloader;