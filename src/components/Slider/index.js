import React from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';
import Carousel from "react-slick";

// Component
import Slide from '../Slide';

type Props = {
  sliderContent : Object,
}

var settings = {
  autoplay       : true,
  dots           : true,
  infinite       : true,
  speed          : 500,
  slidesToShow   : 1,
  slidesToScroll : 1
};

const Slider = observer(({sliderContent} : Props) => (
  <div id="main-slider" className="carousel slide">
    <Carousel {...settings}>
      {
        _.map(sliderContent, (slide) => {
          return (
            <Slide { ...{
              key           : slide.title,
              sliderContent : slide,
            }}/>
          );
        })
      }
    </Carousel>
  </div>
));

export default Slider;
