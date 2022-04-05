import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function ImageSlider() {
  let settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="\images\slider-badging.jpg" alt="yo" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
}
const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;

    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -25px;
  }
  .slick-next {
    right: -25px;
  }
  .slick-slide img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;
const Wrap = styled.div`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    cursor: pointer;
    display: block;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 2px 10px 40px 20px rgba(0, 0, 0, 0.72);

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

export default ImageSlider;
