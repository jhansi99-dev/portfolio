import React from 'react';
import './Home.css'; // Make sure to create and import your CSS file
import homeImage from '../../assets/home-main.png'; // Correct path to home-main.png
import Type from '../Typewriter'; // Adjust the path if necessary
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons
import introImage from '../../assets/avatar.svg'; // Adjust this path to your actual image location

function Home() {
    return (
      <>
        <div className="home-container">
            <div className="text-section">
            <h1>
          Hi There!{" "}
          <span
            className="wave-emoji"
            role="img"
            aria-label="wave"
          >
            👋
          </span>
        </h1>
                <h2>
                    I’M <span className="highlight">JHANSI</span>
                </h2>
                {/* Add Typewriter text right after the hand wave and name */}
                <div className="typewriter-text">
                    <Type />
                </div>
            </div>
            <div className="image-section">
                <img src={homeImage} alt="Illustration" className="home-main" />
    </div>
    </div>
    <div className="introduction-container"> {/* Parent div for the introduction section */}
      <div className="intro-text-section">
        <h2>LET ME INTRODUCE <span className="highlight">MYSELF</span></h2>
        <p>
          I fell in love with <span className="highlight">programming</span> and I have at least learnt something, I think… 🤷‍♂️<br />
          I am fluent in classics like Html, Javascript, and CSS.
          My field of interests are building new<span className="highlight">Web Technologies</span> and Products and also in areas related <span className="highlight">React.</span>
        </p>
      </div>
      <div className="intro-image-section">
        <img src={introImage} alt="Introduction Illustration" className="intro-image" />
      </div>
      </div>
      <div className='social-section'>
        <h2>FIND <span className="highlight">ME</span> ON.</h2>
        <p>Feel Free <span className="highlight">Connect</span> with me</p>
        <ul className="social-links">
                        <li>
                            <a href="https://github.com/jhansi99-dev" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </li>
                       &nbsp; <li>
                            <a href="https://www.linkedin.com/in/reddy-jhansi-devi-b8029b24b/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        &nbsp;<li>
                            <a href="https://www.instagram.com/jhansi_reddi_99/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
    </div>
    </>
);
}
export default Home;