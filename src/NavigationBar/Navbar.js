// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="nav">
    <div className='content-container'>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/UploadImageforUser" className="nav-link">
            UploadUserData
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/searchuserbyidpage" className="nav-link">
            Searchuserbyidpage
          </Link>
        </li>
        
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
