import React from 'react';
import imperialBeach from '../../assets/imperial-beach.jpg';

const Address = () => (
  <section id="Address" className="container">
    <img src={imperialBeach} alt="imperialBeach"/>
    <article className="wrapAddress">
      <small>Our Camp</small>
      <h2 className="title">CA 91932, USA Imperial Beach 560 Silver Strand Blvd</h2>
      <a href="">Get in touch</a>
    </article>
  </section>
)

export default Address;
