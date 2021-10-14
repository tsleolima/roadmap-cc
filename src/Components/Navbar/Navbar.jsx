import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo-roadmap.svg'
import openDevLogo from '../../assets/logo/logo-opendev.svg'



class Navbar extends Component {
    render() { 
        return (  
            <nav className="navbar">
                <ul className="navbar__wrapper">
                    <div className="navbar__box">
                    <li className="navbar__item"><img src={ logo } alt="Logo Roadmap-cc" id="logo"/></li>
                    </div>
                    <div className="navbar__box__links">
                    <li className="navbar__item hvr-underline-from-left"><Link to="/">Home</Link></li>
                    <li className="navbar__item hvr-underline-from-left"><a href="#about">Sobre</a></li>
                    <li className="navbar__item hvr-underline-from-left"><a href="#trails">Trilhas</a></li>
                    <img src={ openDevLogo } alt="" id="openDevLogo" className="navbar__item"/>
                    </div>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;