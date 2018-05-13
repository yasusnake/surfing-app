import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'
import '../../assets/modal-video.min.css';
import img1 from '../../assets/men-in-the-beach.jpg';
import img2 from '../../assets/men-in-the-surf-playButton.jpg';

class SurfExperience extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen : false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div id="SurfExperience" className="container">
        <h2 className="title">Surfing is the most blissful experience you can have on this planet, a taste of heaven.</h2>
        <small>John McCarthy</small>
        <hr />
        <img src={img1} alt="Img1"/>
        <p className="paragraph">By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</p>
        <a className="url" href="">Read more</a>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='hJpiet1YO1Y' onClose={() => this.setState({isOpen: false})} />
        <img src={img2} alt="Img2" onClick={this.openModal}/>
      </div>
    );
  }
}

export default SurfExperience;
