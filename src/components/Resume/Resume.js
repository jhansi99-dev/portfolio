import React from 'react';
import './Resume.css'; // Import a CSS file to handle your styling

const Resume = () => {
  return (
    <>
      <div><h2 className="resume-title">My Resume</h2></div>
      <div className="resume-container">
        <iframe
          src={`${process.env.PUBLIC_URL}/resume.pdf`} // Correct the path with process.env.PUBLIC_URL
          title="Resume"
          className="resume-iframe"
        />
      </div>
    </>
  );
};

export default Resume;


