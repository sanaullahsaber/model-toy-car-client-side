import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import img1 from "../../../assets/carousel/FF_Banner.jpg";
import img2 from "../../../assets/carousel/Welcome.jpg";
import img3 from "../../../assets/carousel/Free_Shipping_over_100.png";
import img4 from "../../../assets/carousel/film_diecast.png";

import "./Banner.css";

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider my-2">
        <div className="keen-slider__slide number-slide1">
          <img src={img1} alt="" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={img2} alt="" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={img3} alt="" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src={img4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
