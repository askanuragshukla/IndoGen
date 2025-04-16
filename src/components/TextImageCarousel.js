import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { EffectCards, Autoplay } from "swiper/modules";
import "./TextImageCarousel.css";

const TextImageCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x400/ff5733/fff?text=Image+1",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x400/3498db/fff?text=Image+2",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x400/2ecc71/fff?text=Image+3",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x400/f1c40f/fff?text=Image+4",
    },
  ];

  return (
    <div className="carousel-container">
      {/* Left Side Text Content */}
      <div className="carousel-text">
        <h1>Explore the Beauty</h1>
        <p>Swipe through breathtaking landscapes, rich culture, and unforgettable moments.</p>
      </div>

      {/* Right Side Swiper Carousel */}
      <div className="carousel-swiper">
        <Swiper
          effect="cards"
          grabCursor={true}
          slidesPerView={1}
        cardsEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
        }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[EffectCards, Autoplay]}
          className="swiper-wrapper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div className="card">
                <img src={slide.image} alt={`Slide ${slide.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TextImageCarousel;
