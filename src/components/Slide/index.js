import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  sliderContent : Array,
}

const Slide = observer(({sliderContent} : Props) => (
  <div className="container-slider">
    <div className="wrap-info">
      <small>{sliderContent.pronoun}</small>
      <h1>{sliderContent.title}</h1>
      <p>{sliderContent.text}</p>
    </div>
    <img className="d-block" src={sliderContent.img} align="right" alt={sliderContent.title}/>
  </div>
));

export default Slide;
