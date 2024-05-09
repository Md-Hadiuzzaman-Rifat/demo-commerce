/* eslint-disable no-unused-vars */

import { useRef } from "react";
import Slider from "react-slick";
import CarouselItem from "../../components/CarouselItem/CarouselItem"
import "./productCarouse.scss"

function AutoPlayMethods() {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };

  
  return (
    <div className="slider-container mt-8">
      <h2 className="text-xl font-abc font-semibold">Similar Category</h2>
      <div className="h-[1px] w-full bg-black mt-2 mb-4"></div>

      <Slider className="carousel" ref={slider => (sliderRef = slider)} {...settings}>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
      </Slider>
    </div>
  );
}
export default AutoPlayMethods;

