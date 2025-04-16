import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  const swiperRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Card 1",
      image: "https://via.placeholder.com/400x250",
      bgColor: "#ff5733",
      progressColor: "#fff"
    },
    {
      id: 2,
      title: "Card 2",
      image: "https://via.placeholder.com/400x250",
      bgColor: "#3498db",
      progressColor: "#000"
    },
    {
      id: 3,
      title: "Card 3",
      image: "https://via.placeholder.com/400x250",
      bgColor: "#2ecc71",
      progressColor: "#fff"
    }
  ];

  function changeBackground(slide) {
    const getBackground =
      slide.slides[slide.activeIndex].getAttribute("data-bg-color");
    const getProgressColor =
      slide.slides[slide.activeIndex].getAttribute("data-progress-color");

    document.body.style.backgroundColor = getBackground;
    document.body.style.setProperty("--progress-color", getProgressColor);
    document.body.style.setProperty("--theme-color", getBackground);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        const progressValue = swiperRef.current.autoplay.running
          ? (swiperRef.current.autoplay.timeLeft / 3000) * 100
          : 0;
        setProgress(progressValue);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{height:'850px'}}>
        <div  className="w-full flex justify-center items-center h-screen relative">
      {/* Autoplay Progress Bar */}
      <div className="autoplay-progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => changeBackground(swiper)}
        modules={[EffectCoverflow, Autoplay]}
  className="w-[95%] md:w-[80%]" // Increase Swiper width
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="text-center"
            data-bg-color={slide.bgColor}
            data-progress-color={slide.progressColor}
          >
            <div className="card slide-1" 
    style={{
      width: "1000px",
      height: "600px",
      minWidth: "600px",
      minHeight: "400px",
    }}>
              <div className="card-content">
                <h2 className="card-title" style={{ color: "#fff" }}>
                  {slide.title}
                </h2>
                <img src={slide.image} alt={slide.title} className="mx-auto" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        className="slider-button-prev slider-button absolute left-4 cursor-pointer z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
          <g className="slider-svg-wrap">
            <g className="slider-svg-circle-wrap">
              <circle cx="42" cy="42" r="40"></circle>
            </g>
            <path
              className="slider-svg-arrow"
              d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
            ></path>
            <path className="slider-svg-line" d="M80,0H0"></path>
          </g>
        </svg>
      </div>

      <div
        className="slider-button-next slider-button absolute right-4 cursor-pointer z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
          <g className="slider-svg-wrap">
            <g className="slider-svg-circle-wrap">
              <circle cx="42" cy="42" r="40"></circle>
            </g>
            <path
              className="slider-svg-arrow"
              d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
            ></path>
            <path className="slider-svg-line" d="M80,0H0"></path>
          </g>
        </svg>
      </div>

  
    </div>
      <div style={{paddingTop:100,marginBottom:0,paddingBottom:0}}>
          {/* Autoplay Progress Circle */}
          <div className="autoplay-progress">
        <svg viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span></span>
      </div>

<div className="mouse-scroll absolute bottom-4 left-1/2 transform -translate-x-1/2">
  <div className="mouse">
    <div className="roll"></div>
    <div className="rollshadow"></div>
  </div>
  scroll for next ghost
</div>

      {/* YouTube Button */}
      <a
        href="https://www.youtube.com/@PixelPerfectLabs"
        className="youtube-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(255,255,255)",
            transform: "", // You may need to set a valid value here
            msFilter: "" // This is an outdated property; you might want to remove it
          }}
        >
          <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
        </svg>
      </a>
      </div>
    </div>
    
  );
};

export default HeroCarousel;










// <div className="card slide-1">
//       <div className="svg-wrapper">
//         <svg width="1172" height="1024" viewBox="0 0 1172 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
//           {/* SVG content goes here */}
//           <g filter="url(#filter0_f_2_116)">
//             <path d="M48 26H1052.66L872.787 729.031L314.761 843.027L48 26Z" fill="url(#paint0_linear_2_116)" />
//           </g>
//           {/* Add all other SVG elements here */}
//           <defs>
//             {/* Add all filter and gradient definitions here */}
//           </defs>
//         </svg>
//       </div>
//       <div className="card-content">
//         <div className="card-sub-title" style={{ color: '#FF5B79' }}>#1 Top Scariest Ghost</div>
//         <h2 className="card-title" data-text="RESPAWN THE SPOOKY SKULL" style={{ color: '#fff' }}>RESPAWN THE SPOOKY SKULL</h2>
//         <p className="card-description" style={{ color: '#fff' }}>
//           In search for cute little puppy, Captain Sem has come back from his tragic death. With his hogwarts certified power he promise to be a hero for all of ghostkind.
//         </p>
//         <div className="card-cta">
//           <a href="#" className="cta-button" style={{ color: '#FF5B79' }}>Book Now</a>
//         </div>
//       </div>
//       <div className="card-ghost-info">
//         <span style={{ color: '#FF5B79' }}></span>
//         <div className="ghost-name">Captain Sem</div>
//         <div>Veteran Spooky Ghost</div>
//       </div>
//     </div>