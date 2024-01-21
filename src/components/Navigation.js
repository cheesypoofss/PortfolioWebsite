import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        Home
      </NavLink>
      <NavLink 
        to="/UI-UX-Work" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        UI/UX Work
      </NavLink>
      <NavLink 
        to="/Research" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        Research
      </NavLink>
      <NavLink 
        to="/Art-Design" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        Art & Design
      </NavLink>
    </nav>
  );
}

export default Navigation;
