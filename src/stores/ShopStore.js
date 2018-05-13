import { observable/*, actions*/ } from 'mobx';
// import _ from 'lodash';

// Images Slider
import slider1 from '../assets/sliderimg1.jpg';
import slider2 from '../assets/sliderimg2.jpg';

// Images Shop
import board1 from '../assets/Chilli-Rare-Bird-board.png';
import board2 from '../assets/Emery-NEM-XF-board.png';
import board3 from '../assets/Agency-GROM-table.png';

// Images SurfLessons
import lesson1 from '../assets/surf-training.jpg';
import lesson2 from '../assets/point-break.jpg';

class ShopStore {
  @observable sliderContent = [
    {
      pronoun : "Your",
      title   : "Beatiful Escape",
      text    : "One of the greatest things about the sport of surfing is that you need only three things your body a surfboard, and a wave",
      img     : slider1
    },
    {
      pronoun : "Our",
      title   : "Donec malesuada",
      text    : "Morbi nulla lorem, tempus sed sagittis ut, viverra eu ipsum. Praesent orci mi, egestas vitae enim vel, venenatis lacinia quam",
      img     : slider2
    }
  ]

  @observable itemsShop = [
    {
      _id      : 1,
      bigImg   : board1,
      smallImg : '',
      category : 'Funboards',
      title    : 'Chilli Rare Bird',
      price    : 890
    },
    {
      _id      : 2,
      bigImg   : board2,
      smallImg : '',
      category : 'Surfboards',
      title    : 'Emery NEM XF',
      price    : 950
    },
    {
      _id      : 3,
      bigImg   : board3,
      smallImg : '',
      category : 'Funboards',
      title    : 'Agency Grow',
      price    : 670
    },
    {
      _id      : 4,
      bigImg   : board1,
      smallImg : '',
      category : 'Funboards',
      title    : 'Chilli Rare Bird',
      price   : 890
    },
    {
      _id      : 5,
      bigImg   : board2,
      smallImg : '',
      category : 'Surfboards',
      title    : 'Emery NEM XF',
      price    : 950
    },
  ]

  @observable surfLessons = [
    {
      num   : '01',
      title : 'Surf Training',
      text  : 'By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.',
      img   : lesson1,
    },
    {
      num   : '02',
      title : 'Point Break',
      text  : 'Cras venenatis sollicitudin tortor, placerat tempus elit vulputate a. Vivamus id euismod lectus, nec maximus ligula. Fusce a enim finibus, pharetra purus egestas.',
      img   : lesson2,
    },
  ]

  // @action
  // getItems = () => {
  //   const tasks = this.items;
  // }
}

const shopStore = new ShopStore();
export default shopStore;
