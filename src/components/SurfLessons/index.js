import React from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';

// Component
import Lesson from './Lesson';

type Props = {
  surfLessons : Object,
}

const SurfLessons = observer(({surfLessons} : Props) => (
  <section id="SurfLessons" className="container">
    {
      _.map(surfLessons, (lesson) => {
        return (
          <Lesson {...{
            key        : lesson.num,
            surfLesson : lesson,
          }}/>
        );
      })
    }
  </section>
));

export default SurfLessons;
