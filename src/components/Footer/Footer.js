import React from 'react';
import './Footer.css'; // Import the CSS for the footer
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>Designed and Developed by Jhansi Reddi</p>
                </div>
                <div className="footer-center">
                    <p>Copyright © {new Date().getFullYear()} RD</p>
                </div>
                <div className="footer-right">
                    <ul className="footer-links">
                        <li>
                            <a href="https://github.com/jhansi99-dev" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/reddy-jhansi-devi-b8029b24b/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jhansi_reddi_99/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;