import React from "react";

import Baby_Jogger from "../Pictures/Baby_Jogger.png";
import $ from "jquery";

// import "../css/carousel.css";
// import "../css/carousel.sass";
import "../css/Carousel.scss";

function Carousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img src={Baby_Jogger} height="100" width="250" alt="" />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Carousel;
