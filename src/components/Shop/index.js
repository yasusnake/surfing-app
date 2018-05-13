import React from 'react';
import _ from 'lodash';
import OwlCarousel from 'react-owl-carousel2';
import { observer } from 'mobx-react';

// Component
import ItemShop from '../itemShop';

type Props = {
  itemsShop : Object,
}

const options = {
    loop       : true,
    margin     : 10,
    responsive : {
      0 : {
        items : 1
      },
      600 : {
        items : 3
      }
    }
};

const Shop = observer(({itemsShop} : Props) => (
  <section id="shop" className="container">
    <small className="owlSmallTitle">Shop</small>
    <h2 className="title">Surfboards</h2>
    <OwlCarousel ref="car" options={options}>
      {
        _.map(itemsShop, (item) => {
          return (
            <ItemShop {...{
              key      : item._id,
              itemShop : item,
            }}/>
          );
        })
      }
    </OwlCarousel>
  </section>
));

export default Shop;
