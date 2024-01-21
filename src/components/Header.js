import React from 'react';
import Navigation from './Navigation';
import headerLogo from '../images/zaralogo.png';
import './Header.css';

function Header() {
  return (
    <header>
      <div className = "container">
      <img src={headerLogo} alt="Zara Iqbal Logo" />
      <Navigation />
      </div>
    </header>
  );
}

export default Header;