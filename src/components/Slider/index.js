import React from 'react';
import slider1 from '../../assets/sliderimg1.jpg';
import slider2 from '../../assets/sliderimg2.jpg';
import { observer } from 'mobx-react';

const Slider = observer(() => (
  <div id="main-slider" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container-slider">
          <div className="wrap-info">
            <small>YOUR</small>
            <h1>Beatiful Escape</h1>
            <p>
              One of the greatest things about the sport of surfing is<br/>
              that you need only three things your body<br/>
              a surfboard, and a wave
            </p>
          </div>
          <img className="d-block" src={slider1} align="right" alt="First slide"/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container-slider">
          <div className="wrap-info">
            <small>YOUR</small>
            <h1>Beatiful Escape</h1>
            <p>
              One of the greatest things about the sport of surfing is<br/>
              that you need only three things your body<br/>
              a surfboard, and a wave
            </p>
          </div>
          <img className="d-block" src={slider2} align="right" alt="First slide"/>
        </div>
      </div>
    </div>
  </div>
));

export default Slider;
