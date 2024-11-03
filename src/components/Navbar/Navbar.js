// src/Navbar.js
import React, { useState } from 'react'; // Import useState for handling toggle state
import { FaHome, FaUserAlt, FaFileAlt, FaFolderOpen, FaGithub,FaBars,FaTimes} from 'react-icons/fa'; // Import icons
import './Navbar.css';  // Import the custom CSS
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-sign">RD</div> {/* RD Sign */}
                </div> {/* Closing div for navbar-left */}
                  {/* Toggle button for small screens */}
            <button className="navbar-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Show X (FaTimes) when open, hamburger (FaBars) when closed */}
            </button>
            <ul  className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/"><FaHome style={{ marginRight: '5px' }} /> Home</Link></li>
                <li><Link to="/about"><FaUserAlt style={{ marginRight: '5px' }} /> About</Link></li>
                <li><Link to="/projects"><FaFolderOpen style={{ marginRight: '5px' }} /> Projects</Link></li>  {/* Projects Icon */}
                <li><Link to="/resume"><FaFileAlt style={{ marginRight: '5px' }} /> Resume</Link></li>
            <a href="https://github.com/jhansi99-dev" target="_blank" rel="noopener noreferrer" className="github-button">
                <FaGithub />github
            </a>
            </ul>
        </nav>
    );
};

export default Navbar;