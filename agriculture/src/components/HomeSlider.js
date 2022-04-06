import React, { Component } from "react";
import { Slide } from "react-slideshow-image";



//importing the images

import slide1 from "../resources/slider3.jpg";
import slide2 from "../resources/slider1.jpg";


//save it to an array
const slideImages = [ slide1, slide2];

//slider properties
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

export default class HomeSlider extends Component {
  render() {
    return (
      <div className="slider" style={{ width: 1350 }}>
        <Slide {...properties}>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                height: 400
              }}
            >
              
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[1]})`, height: 400 }}
            >
               {/* <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[2]})`, height: 400 }}
            > */}
              
            </div>
          </div>
        </Slide>
        {/* <div
        className="footer"
        style={{ backgroundColor: "black", width: 1365, height: 25,textAlign:"center" }}
      >
        <button><Link to="/AboutUs">AboutUs</Link></button>
      
      </div> */}
      </div>
    );
  }
}
