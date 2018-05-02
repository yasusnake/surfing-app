import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import './reset.css';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

// Components
import Slider from  './components/Slider';

@inject('ShopStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <header id="header" className="container">
            <i class="fas fa-bars fa-2x"></i>
            <a id="logo"><img src={logo} className="surfing-logo" alt="logo" /></a>
            <nav className="nav">
              <a className="nav-link active" href="#">Stories</a>
              <a className="nav-link" href="#">Events</a>
              <a className="nav-link" href="#">Places</a>
              <a className="nav-link" href="#">Boards</a>
            </nav>
            <i class="fas fa-shopping-cart fa-2x"></i>
          </header>
          <Slider />
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
        </div>
      </div>
    );
  }
}

export default App;
