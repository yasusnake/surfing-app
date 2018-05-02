import { observable/*, actions*/ } from 'mobx';
import _ from 'lodash';

class ShopStore {
  @observable items = [
    {_id: '', bigImg: '', smallImg: '', category: '', title: '', price: ''}
  ]

  // @action
  // getItems = () => {
  //   const tasks = this.items;
  // }
}

const shopStore = new ShopStore();
export default shopStore;
