import React, { Component } from 'react';
import './App.css';
import './reset.css';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

// Components
import Header from  './components/Header';
import Slider from  './components/Slider';
import Footer from  './components/Footer';

@inject('ShopStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <Header />
          <Slider />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
