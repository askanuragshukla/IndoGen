import React from "react";
import { AppBar, Toolbar, Button, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import sadgurulogo from "./images/indogenlogo.png";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" sx={{ backgroundColor: "#121212", padding: "0.5rem 1rem" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: isSmallScreen ? "column" : "row" }}>
        {/* Logo and Brand Name */}
        <Box display="flex" flexDirection="column" alignItems="center" gap={0.5} sx={{ mb: isSmallScreen ? 2 : 0 }}>
  <Box display="flex" alignItems="center" gap={1}>
    <img src={sadgurulogo} alt="Sadguru Logo" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
    <Typography
      variant="h6"
      sx={{
        color: "white",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
        fontSize: "20px",
      }}
    >
      IndoZen Global
    </Typography>
  </Box>
  <Typography
    variant="caption"
    sx={{
      color: "#BBBBBB",
      fontFamily: "Inter, sans-serif",
      fontSize: "12px",
      textAlign: "center",
      lineHeight: 1,
    }}
  >
    SEAMLESS TRADE BEYOND BORDERS
  </Typography>
</Box>

        {/* Navigation Links */}
        <Box display="flex" gap={4} sx={{ flexWrap: "wrap", justifyContent: isSmallScreen ? "center" : "flex-start" }}>
          {["Home", "About Us", "Products"].map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              sx={{
                color: "white",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Contact Us Button */}
        <Button
          component={Link}
          to="/contact"
          sx={{
            backgroundColor: "#FFC107",
            color: "black",
            fontWeight: "bold",
            textTransform: "none",
            padding: "8px 16px",
            borderRadius: "5px",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            '&:hover': { backgroundColor: "#E0A800" },
            marginTop: isSmallScreen ? "10px" : "0",
          }}
        >
          Contact Us ➝
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
