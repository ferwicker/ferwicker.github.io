import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../assets/images/ferwicker-logo.png'

function Nav () {
    return (
        <nav className='navbar navbar-expand-lg fixed-top'>
            <div className='container'>
                <Link to="/">
                    <img className="navbar-brand" src={logo} alt='Fer Wicker logo'></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-ellipsis-h"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id="navbarNavAltMarkup">
                    <Link to="/" className='nav-link nav-text'>
                        Home
                    </Link>
                    <Link to="/about" className='nav-link nav-text'>
                        About
                    </Link>
                    <Link to="/portfolio" className='nav-link nav-text'>
                        Portfolio
                    </Link>
                    <Link to="/contact" className='nav-link nav-text'>
                        Contact
                    </Link>
                    <div className='d-flex'>
                    <a className="nav-link nav-icon fab fa-github fa-2x" href="https://github.com/ferwicker" target="_blank">
                    </a>
                    <a className="nav-link nav-icon fas fa-file-download fa-2x" href="" target="_blank">
                    </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;