import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  sliderContent : Object,
}

const Slide = observer(({sliderContent} : Props) => (
  <div className="carousel-item">
    <div className="container-slider">
      <div className="wrap-info">
        <small>{sliderContent.pronoun}</small>
        <h1>{sliderContent.title}</h1>
        <p>{sliderContent.text}</p>
      </div>
      <img className="d-block" src={sliderContent.img} align="right" alt={sliderContent.title}/>
    </div>
  </div>
));

export default Slide;
