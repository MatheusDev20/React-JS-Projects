import React from 'react';
import './Navbar.css'
import brand from '../../assets/icon.svg'

function Navbar() {
return (
  <nav className="navbar navbar-expand-md navbar-dark ">
    <a href="google.com" className="navbar-brand"><img src={brand} className="brand-img" alt="brand"/>
     <span className="brand-text ml-3">Master Heroes</span>
    </a>
    <a href="https://github.com/MatheusDev20/Master-Heroes-Game" target="_blank" className="nav-link">
      <span className="github-link">Github</span>
    </a>
  </nav>
    );
}

export default Navbar;