import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  itemShop : Array,
}

const itemShop = observer(({itemShop} : Props) => (
  <article className="owlCarousel">
    <img src={itemShop.bigImg} alt={itemShop.title}/>
    <div className="owlText">
      <small>{itemShop.category}</small>
      <h2>{itemShop.title}</h2>
      <p>$ {itemShop.price}</p>
      <a href="">Buy</a>
    </div>
  </article>
));

export default itemShop;
