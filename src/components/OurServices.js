import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Who We Are",
      description:
        "Indozen Global is a dynamic India-based exporter dedicated to delivering premium-quality food products across international markets.",
      icon: "🌏",
    },
    {
      id: 2,
      title: "What We Offer",
      description:
        "Specializing in flavored Makhana and high-grade Onion & Garlic powders, we bring authentic Indian taste to the global table.",
      icon: "🍽️",
    },
    {
      id: 3,
      title: "Our Legacy",
      description:
        "Backed by over 30 years of expertise in sourcing, merchandising, and global trade, we are a trusted name in the export industry.",
      icon: "📦",
    },
    {
      id: 4,
      title: "Our Promise",
      description:
        "With a passionate and hands-on team, we consistently deliver quality, integrity, and excellence — exceeding expectations every time.",
      icon: "🤝",
    },
  ];

  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(135deg,rgb(0, 0, 0),rgb(0, 0, 0))', color: "#fff" }}>
      {/* Header Section */}
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: 2 }}
      >
        Our Services
      </Typography>
      <Typography
  variant="h4"
  align="center"
  gutterBottom
  sx={{ fontWeight: "bold" }}
>
  Premium Export Solutions in Makhana, Onion & Garlic Powders
</Typography>
<Typography align="center">
  Indozen Global is committed to delivering authentic Indian food products with unmatched quality, reliability, and global reach.
</Typography>

      {/* Services Grid */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={6} key={service.id}>
            <Paper
              elevation={0}
              sx={{
                padding: 3,
                textAlign: "left",
                backgroundColor: "transparent",
                borderRadius: 2,
                margin: 5,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                animation: "floating 4s ease-in-out infinite", // Add animation
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "24px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {service.id < 10 ? `0${service.id}` : service.id}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#fff",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 1,
                  color: "#fff",
                }}
              >
                {service.icon} {service.title}
              </Typography>
              <Typography
                sx={{
                  opacity: 0.8,
                  fontSize: "14px",
                  color: "#D4C9B6",
                }}
              >
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add the floating animation */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px); /* Move slightly up */
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default OurServices;