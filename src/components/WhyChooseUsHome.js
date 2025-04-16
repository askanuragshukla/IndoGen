import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import imagepoint from './images/earth.png'
const WhyChooseUsHome = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
        padding: 4,
        color: "white",
      }}
    >
      {/* Left Side - Text Section */}
      <Box sx={{ flex: 1, maxWidth: "50%" }}>
        <Typography variant="subtitle2" sx={{ letterSpacing: 1, textTransform: "uppercase" }}>
          Premium Imports & Exports
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 2 }}>
          Bringing the finest <i>Makhana's</i> and <i>Onion Powder's</i> to the world.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FCEE77",
            color: "black",
            borderRadius: 20,
            padding: "10px 20px",
            fontWeight: "bold",
            mt: 3,
          }}
          onClick={() => navigate("/contact")}
        >
          Contact Us ↗
        </Button>
      </Box>
      
      {/* Right Side - Image/Content Section */}
      <Box
        sx={{
          flex: 1,
          maxWidth: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>
          We specialize in high-quality, handcrafted wooden toys and stylish kids' garments. Ensuring top-notch quality and sustainable sourcing for our customers worldwide.
        </Typography>
        <Box
          sx={{
           
          }}
        />
        <img
            src={imagepoint}
            alt="Wooden Toys and Kids Garments"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
      </Box>
    </Box>
  );
};

export default WhyChooseUsHome;