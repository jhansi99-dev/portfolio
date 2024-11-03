import React from 'react';
import './About.css'; // Import the CSS file
import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaJava,FaNodeJs } from 'react-icons/fa'; // Import FontAwesome icons
import { FaGithub, FaCode } from 'react-icons/fa';
import aboutImage from '../../assets/main.png'; // Replace with your actual image path
const skills = [
    { name: 'HTML', icon: <FaHtml5 className="skill-icon" style={{ color: 'white',fontSize:'80px'}} /> },
  { name: 'CSS', icon: <FaCss3Alt className="skill-icon" style={{ color: 'white',fontSize:'80px'}} /> },
  { name: 'JavaScript', icon: <FaJs className="skill-icon" style={{ color: 'white',fontSize:'80px'}} /> },
  { name: 'React', icon: <FaReact className="skill-icon" style={{ color: 'white',fontSize:'80px'}} /> },
  { name:'Java',icon:<FaJava className="skill-icon"style={{color:'white',fontSize:'80px'}}/>},
  { name:'NodeJs',icon:<FaNodeJs className="skill-icon"style={{color:'white',fontSize:'80px'}}/>},
  ];
const About = () => {
  return (
    <>
    <div className="About-container">
      <div className="about-text">
        <h2>Who I Am</h2>
        <p>Hi Everyone, I am <span className="highlight">Jhansi Reddi</span> from Andhrapradesh, India.<br />
          I am currently pursuing MCA.<br />
          I have completed an Bachelors Degree in Maths and Computer science.
        </p>
        <p>Apart from coding, some other activities that I love to do!</p>
        <ul>
          <li>Playing Games</li>
          <li>Cooking</li>
          <li>Travelling</li>
        </ul>
        <h6><strong><span className='colour'>"Strive to build things that make a difference!"</span></strong></h6>
        </div>
        <div className="about-image">
    <img src={aboutImage} alt="Jhansi reddi" />
  </div>
      </div>
      {/* Professional Skill Set Section */}
      <div className="skill-set">
        <h3><span className="highlight">Professional</span> Skill Set</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
               {skill.icon} {/* Display the FontAwesome icon */}
            </div>
          ))}
        </div>
      </div>
      {/* Tools I Use Section */}
      <div className="tool-set">
      <h3>Tools I <span className="highlight">Use</span></h3>
        <div className="tool-grid">
          <div className="tool-card">
            <FaGithub size={80} color="white" /> {/* Adjust size and color as needed */}
          </div>
          <div className="tool-card">
            <FaCode size={80} color="white" />
          </div>
        </div>
        </div>
      </>
  );
};

export default About;