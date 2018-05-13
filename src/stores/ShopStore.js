import { observable/*, actions*/ } from 'mobx';
// import _ from 'lodash';
import slider1 from '../assets/sliderimg1.jpg';
import slider2 from '../assets/sliderimg2.jpg';

class ShopStore {
  @observable sliderContent = [
    {pronoun: "Your", title: "Beatiful Escape", text: "One of the greatest things about the sport of surfing is that you need only three things your body a surfboard, and a wave", img: slider1},
    {pronoun: "Our", title: "Donec malesuada", text: "Morbi nulla lorem, tempus sed sagittis ut, viverra eu ipsum. Praesent orci mi, egestas vitae enim vel, venenatis lacinia quam", img: slider2}
  ]

  @observable itemsShop = [
    {_id: '', bigImg: '', smallImg: '', category: '', title: '', price: ''}
  ]

  // @action
  // getItems = () => {
  //   const tasks = this.items;
  // }
}

const shopStore = new ShopStore();
export default shopStore;
