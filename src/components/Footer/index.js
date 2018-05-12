import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => (
  <footer id="footer" className="container">
    <a href=""><img src={logo} className="surfing-logo-footer" alt="logo" /></a>
    <nav id="nav-footer" className="nav justify-content-center">
      <a className="nav-link active" href="#">Stories</a>
      <a className="nav-link" href="#">Events</a>
      <a className="nav-link" href="#">Places</a>
      <a className="nav-link" href="#">Boards</a>
    </nav>
    <nav id="social-network-footer" className="nav justify-content-center">
      <a className="fab fa-tumblr" href="#"></a>
      <a className="fab fa-twitter" href="#"></a>
      <a className="fab fa-vimeo-v" href="#"></a>
    </nav>
  </footer>
)

export default Footer;
