import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => (
  <header id="header" className="container">
    <i className="fas fa-bars fa-2x"></i>
    <a id="logo"><img src={logo} className="surfing-logo" alt="logo" /></a>
    <nav className="nav">
      <a className="nav-link active" href="">Stories</a>
      <a className="nav-link" href="">Events</a>
      <a className="nav-link" href="">Places</a>
      <a className="nav-link" href="">Boards</a>
    </nav>
    <i className="fas fa-shopping-cart fa-2x"></i>
  </header>
)

export default Header;
