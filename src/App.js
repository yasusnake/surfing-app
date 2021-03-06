import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

// Components
import Header from './components/Header';
import Slider from './components/Slider';
import SurfExperience from './components/SurfExperience';
import Shop from './components/Shop';
import SurfLessons from './components/SurfLessons';
import JoinClub from './components/JoinClub';
import Address from './components/Address';
import Footer from './components/Footer';

@inject('ShopStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider {...{
          sliderContent : this.props.ShopStore.sliderContent,
        }}/>
        <SurfExperience />
        <Shop {...{
          itemsShop : this.props.ShopStore.itemsShop,
        }}/>
        <SurfLessons {...{
          surfLessons : this.props.ShopStore.surfLessons,
        }}/>
        <JoinClub />
        <Address />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  sliderContent : PropTypes.object,
  itemsShop     : PropTypes.object,
  surfLessons   : PropTypes.object,
};

export default App;
