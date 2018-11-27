import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import NavBarRibbon from '../components/NavBarRibbon.jsx';
import Footer from '../components/Footer.jsx';
import bannerUrl from '../../img/banner.jpg';

const pics = [
    "../../img/banner.jpg",
    "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
    "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
    "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
    "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
    "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

export default class Carousel2 extends React.Component {
  constructor(props) {
    super(props);
    const idxStart = 0;
    this.state = {
      index: idxStart,
      next: this.getNextIndex(idxStart),
      move: false
    };
  }
  
  getNextIndex(idx) {
    if (idx >= pics.length - 1) {
      return 0;
    }
    return idx + 1;
  }

  setIndexes(idx) {
    this.setState({
      index: idx,
      next: this.getNextIndex(idx)
    });
  }
  componentDidMount() {
    
    setInterval(() => {
      // on
      this.setState({
        move: true
      });
      // off
      setTimeout(() => {
        this.setState({
          move: false
        });
        this.setIndexes(this.getNextIndex(this.state.index));
      }, 500); // same delay as in the css transition here
     
    }, 2000);
  }
  
  render() {
    const move = this.state.move ? 'move' : '';
    
    return (
        <div className="carouselContainer2">
            <div className="mask">
                <div className="pic-wrapper">
                    <div className={`current pic ${move}`}>
                        {this.state.index}
                        <img src={pics[this.state.index]} alt="" />
                    </div>
                    <div className={`next pic ${move}`}>
                        {this.state.next}
                        <img src={pics[this.state.next]} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


    
    
    
    
