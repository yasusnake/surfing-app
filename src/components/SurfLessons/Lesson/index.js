import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  surfLesson : Array,
}

const Lesson = observer(({surfLesson} : Props) => (
  <article>
    <div className="wrapTextLesson">
      <small>{surfLesson.num}</small>
      <h2 className="title">{surfLesson.title}</h2>
      <hr align="left"/>
      <p className="paragraph">{surfLesson.text}</p>
      <a className="url" href="">Read More</a>
    </div>
    <img src={surfLesson.img} alt={surfLesson.title}/>
  </article>
));

export default Lesson;
