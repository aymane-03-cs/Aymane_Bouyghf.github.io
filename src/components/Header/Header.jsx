import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        {/* Navigation à gauche */}
        <div className="header-nav-list header-nav-list-left">
          <NavLink to="/" className={({ isActive }) => isActive ? "header-nav-link active-link" : "header-nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "header-nav-link active-link" : "header-nav-link"}>About</NavLink>
        </div>

        {/* Centre du header */}
        <div className="header-center">
          Aymane BOUYGHF
          <p className='header-center-description'> Computer Science Student </p>
        </div>

        {/* Navigation à droite */}
        <div className="header-nav-list header-nav-list-right">
          <NavLink to="/projects" className={({ isActive }) => isActive ? "header-nav-link active-link" : "header-nav-link"}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "header-nav-link active-link" : "header-nav-link"}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
