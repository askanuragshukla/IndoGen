import React from "react";
import Slider from "react-slick";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1FlavourMak from '../components/images/Carousel1FlavourMak.jpg';
import Carousel2RedOnion from '../components/images/Carousel2RedOnion.webp';

const primaryColor = "black";
const secondaryColor = "white";

// Floating Animation
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Arrows
const NextArrow = ({ onClick }) => (
  <ArrowForwardIos 
    onClick={onClick} 
    sx={{ 
      position: "absolute", 
      top: "50%", 
      right: "10px", 
      transform: "translateY(-50%)",
      zIndex: 10, 
      cursor: "pointer", 
      fontSize: { xs: 25, md: 40 },
      color: secondaryColor, 
      background: primaryColor, 
      borderRadius: "50%", 
      padding: "5px",
      transition: "0.3s",
      "&:hover": { transform: "scale(1.2)", background: secondaryColor, color: primaryColor }
    }}
  />
);

const PrevArrow = ({ onClick }) => (
  <ArrowBackIos 
    onClick={onClick} 
    sx={{ 
      position: "absolute", 
      top: "50%", 
      left: "10px", 
      transform: "translateY(-50%)",
      zIndex: 10, 
      cursor: "pointer", 
      fontSize: { xs: 25, md: 40 },
      color: secondaryColor, 
      background: primaryColor, 
      borderRadius: "50%", 
      padding: "5px",
      transition: "0.3s",
      "&:hover": { transform: "scale(1.2)", background: secondaryColor, color: primaryColor }
    }}
  />
);

const Carousel = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      image: Carousel1FlavourMak,
      title: "Flavourful Makhana in multiple flavours",
      description: "Discover peri peri, Pudina, sweet and Tangy Tomato flavours of our high quality makhana.",
    },
    {
      image: Carousel2RedOnion,
      title: "Fresh Organic Red & White onion powder",
      description: "Experience the rich flavor and aroma of our premium organic red onion powder, sourced from the finest farms.",
    },
  ];

  return (
    <Box sx={{ width: "100%", height: { xs: "60vh", md: "90vh" }, overflow: "hidden", position: "relative" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box 
            key={index}
            sx={{ 
              height: { xs: "60vh", md: "90vh" }, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              background: `url(${slide.image}) center/cover no-repeat`,
              width: "100%" 
            }}
          >
            <Box sx={{ 
              background: "rgba(31, 71, 62, 0.3)",
              color: secondaryColor,
              padding: { xs: "10%", md: "20%" },
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
            }}>
              <motion.div variants={floatAnimation} animate="animate">
                <Typography 
                  variant={isSmallScreen ? "h5" : "h2"}
                  sx={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold", mb: 2 }}
                >
                  {slide.title}
                </Typography>
              </motion.div>

              <motion.div variants={floatAnimation} animate="animate">
                <Typography 
                  variant={isSmallScreen ? "body1" : "h5"}
                  sx={{ fontFamily: "'Playfair Display', serif", mb: 2, color: "#E0A800" }}
                >
                  {slide.description}
                </Typography>
              </motion.div>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
