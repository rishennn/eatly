import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SliderItem from "./SliderItem/SliderItem";

function Slider() {
  return (
    <div className="wrapper">
      <h1 className="title">
        <span>Customer</span> Say
      </h1>
      <div className="slider">
        <Carousel
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <SliderItem
            img="./image/Pic.png"
            title="Alexander R."
            status="01 Year With Us"
            desc="“ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”"
          />
          <SliderItem
            img="./image/Pic.png"
            title="Alexander R."
            status="01 Year With Us"
            desc="“ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”"
          />
          <SliderItem
            img="./image/Pic.png"
            title="Alexander R."
            status="01 Year With Us"
            desc="“ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
