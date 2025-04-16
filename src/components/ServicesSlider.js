import React from "react";
import { Box, Card, CardContent, Typography, Link } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const services = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "shipping & logistics",
    description:
      "Based in Toronto, Canada, we leverage a vast network of trusted suppliers and partners across North America, South America, Europe, and Asia.",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "vehicle sourcing",
    description:
      "We provide seamless logistics solutions, including delivery and secure transportation of vehicles and other assets to any destination worldwide.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "special orders",
    description:
      "Whether it’s a luxury boat, specialized machinery, or a unique automobile, we fulfill custom orders to meet your client’s specific needs.",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "exotic car rentals",
    description:
      "We provide luxury car rental services with top-tier brands for exclusive clients who seek premium experiences.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "global freight forwarding",
    description:
      "We handle international shipments with care, ensuring efficient and secure delivery worldwide.",
  },
];

const ServicesSlider = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#000",
        color: "white",
        py: 8,
        px: 4,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        our services
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, opacity: 0.8 }}>
        At our company, we offer white-glove care, with an unwavering commitment
        to excellence.
      </Typography>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        style={{ paddingBottom: "40px" }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                color: "white",
                p: 3,
                borderRadius: "15px",
                textAlign: "left",
                height: "100%",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
              }}
            >
              <CardContent>
                {service.icon}
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
                  {service.description}
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    mt: 2,
                    fontWeight: "bold",
                  }}
                >
                  learn more →
                </Link>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ServicesSlider;
