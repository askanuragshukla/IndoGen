import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Theme Colors
const primaryColor = "black";
const secondaryColor = "White";

// Floating Animation Variants
const floatAnimation = {
  animate: {
    y: [0, -10, 0], // Moves up and down
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Custom Arrow Components with Hover Effect
const NextArrow = ({ onClick }) => (
  <ArrowForwardIos 
    onClick={onClick} 
    sx={{ 
      position: "absolute", 
      top: "50%", 
      right: "15px", 
      zIndex: 10, 
      cursor: "pointer", 
      fontSize: 40, 
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
      left: "15px", 
      zIndex: 10, 
      cursor: "pointer", 
      fontSize: 40, 
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
      image: "https://t3.ftcdn.net/jpg/09/90/14/22/360_F_990142251_RnKM29HEOCg3PbkWnSynKL8XHcL9IVPs.jpg",
      title: "Falourful makhana's in multiple flavours",
      description: "Discover peri peri, Pudina, sweet and Tangy Tomato falours of our high quality makhana.",
    //  buttonText: "Shop Now",
    },
    {
        image: "https://yadavifood.com/images/product/red_onion_powder1.jpg",
        title: "Fresh Organic Red & White onion powder",
        description: "Experience the rich flavor and aroma of our premium organic red onion powder, sourced from the finest farms.",
       // buttonText: "Order Now",
      },
    // {
    //   image: "https://info.ehl.edu/hubfs/1440/1440x960-spices.jpg",
    //   title: "Exotic Spices from Around the World",
    //   description: "Bring authentic flavors to your kitchen with our premium spices.",
    //   buttonText: "Buy Now",
    // },
    // {
    //   image: "https://yadavifood.com/images/product/red_onion_powder1.jpg",
    //   title: "Fresh Organic Red onion powder",
    //   description: "Experience the rich flavor and aroma of our premium organic red onion powder, sourced from the finest farms.",
    //   buttonText: "Order Now",
    // },
    // {
    //   image: "https://media.istockphoto.com/id/1366928508/photo/garlic-powder.jpg?s=612x612&w=0&k=20&c=f-CpEY6qMNOIzcx8jKveQRn3jGGDS8JrcRWHAvMkal0=",
    //   title: "Fresh Organic garlic powder",
    //   description: "Experience the rich flavor and aroma of our premium organic garlic powder, sourced from the finest farms.",
    //   buttonText: "Order Now",
    // },
  ];

  return (
    <Box sx={{ width: "100%", height: "90vh", overflow: "hidden", position: "relative" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box 
            key={index} 
            sx={{ 
              height: "90vh", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              background: `url(${slide.image}) center/cover no-repeat`,
              width: "100%"
            }}
          >
            <Box sx={{ 
              background: "rgba(31, 71, 62, 0.3)", // Themed overlay
              color: secondaryColor, 
              padding: "20%", 
              borderRadius: "10px", 
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
            }}>
              {/* Floating Title */}
              <motion.div variants={floatAnimation} animate="animate">
                <Typography 
                  variant="h2" 
                  sx={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold", marginBottom: "10px" }}
                >
                  {slide.title}
                </Typography>
              </motion.div>

              {/* Floating Description */}
              <motion.div variants={floatAnimation} animate="animate">
                <Typography 
                  variant="h5" 
                  sx={{ fontFamily: "'Playfair Display', serif", marginBottom: "20px",color:'#E0A800' }}
                >
                  {slide.description}
                </Typography>
              </motion.div>

              {/* Floating Button */}
              <motion.div variants={floatAnimation} animate="animate">
               
              </motion.div>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
