import './Header.css'; // Import the CSS file

import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';

import { CiLinkedin } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <>
    <div>
      
    </div>
    <div id="header">
    <div>
       <img src="./public/logo.jpeg" alt="logo" />
      <h1 className="title">
        International Journal Management <br /> of <br /> Science and Business Conclave
      </h1>
    </div>

      <div className="header-content">
        <div className="icons">
          <NavLink to="#" title="Facebook" className="icon"><FaFacebook /></NavLink>
          <NavLink to="#" title="Twitter" className="icon"><FaTwitter /></NavLink>
          <NavLink to="#" title="Instagram" className="icon"><FaInstagram /></NavLink>
          <NavLink to="#" title="LinkedIn" className="icon"><CiLinkedin /></NavLink>
          <NavLink className="icon phone-wrapper" title="Call"><FaPhone /><span className="phone">+9999999999</span></NavLink>
         
          {/* <select className="language-select">
            <option>Select Language</option>
            <option value="en">English</option>
            <option value="sc">Science</option>
          </select> */}
        
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
