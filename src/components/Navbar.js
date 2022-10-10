import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/"><img alt='' id='menuIcon' src={ require('../images/hamburger.png') }/></a>
    </nav>
  );
}

export default Navbar;
