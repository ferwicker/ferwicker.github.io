import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../assets/images/ferwicker-logo-white.png'

function Footer () {
    return (
        <footer className='fixed-bottom' style={{zIndex:-1}}>
            <div className='container d-flex flex-column align-items-center'>
                <Link to="/">
                    <img className="footer-brand" src={logo} alt='Fer Wicker logo'></img>
                </Link>

                    <div className="d-flex flex-row align-items-center">
                        <a aria-hidden="true" className="fas fa-file-download fa-2x social-icon" title="Download resume" href="" target="_blank"><span className="sr-only">Download Resume</span></a>
                        <a aria-hidden="true" className="fab fa-github fa-2x social-icon" title="Github" href="https://github.com/ferwicker" target="_blank"><span className="sr-only">Github profile</span></a>
                        <a aria-hidden="true" className="fab fa-linkedin-in fa-2x social-icon" title="Linkedin" href="https://www.linkedin.com/in/ferwicker/" target="_blank"><span className="sr-only">Linkedin profile</span></a>
                        <a aria-hidden="true" className="fab fa-instagram fa-2x social-icon" title="Instagram" href="https://www.instagram.com/fer.wicker/" target="_blank"><span className="sr-only">Instagram profile</span></a>
                    </div>
                    <Link to='/contact'className='footer-btn'>
                        Contact me
                    </Link>
            </div>
        </footer>
    )
}

export default Footer;