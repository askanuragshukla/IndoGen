import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import imagepoint from './images/earth.png';

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
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 8 },
        color: "white",
        gap: 4,
      }}
    >
      {/* Left Side - Text Section */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            letterSpacing: 1,
            textTransform: "uppercase",
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
          }}
        >
          Premium Imports & Exports
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mt: 2,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          }}
        >
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
            fontSize: { xs: "0.8rem", sm: "1rem" },
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
          maxWidth: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            px: { xs: 1, sm: 2 },
          }}
        >
          We specialize in high-quality, handcrafted wooden toys and stylish kids' garments.
          Ensuring top-notch quality and sustainable sourcing for our customers worldwide.
        </Typography>

        <Box
          component="img"
          src={imagepoint}
          alt="Wooden Toys and Kids Garments"
          sx={{
            width: { xs: "100%", sm: "80%", md: "100%" },
            height: "auto",
            maxHeight: 400,
            objectFit: "contain",
            borderRadius: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default WhyChooseUsHome;
