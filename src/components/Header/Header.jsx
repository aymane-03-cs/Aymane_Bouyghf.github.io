import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-nav">
        <div className="header-nav-list header-nav-list-left">
          <Link to="/" className="header-nav-link">Homme</Link>
          <Link to="/About" className="header-nav-link">About</Link>
        </div>
        <div className="header-center">
          Aymane BOUYGHF
          <p className='header-center-description'> Computer Science Student </p>
        </div>
        <div className="header-nav-list header-nav-list-right">
          <Link to="/projects" className="header-nav-link">Projects</Link>
          <Link to="/Contact" className="header-nav-link">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
