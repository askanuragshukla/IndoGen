import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const floatAnimation = {
  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-10px)" },
    "100%": { transform: "translateY(0px)" }
  }
};

const WhyChooseUs = () => {
  const features = [
   
    {
      icon: "🧸",
      title: "Wide Range of Wooden Toys",
      description:
        "From educational toys to fun playthings, we ensure safe and exciting products for kids of all ages.",
      delay: "0.3s"
    },
    {
      icon: "🧅 🧄",
      title: "Finest Quality of Garlic & Onion powders",
      description:
        "We source and export the best farm fresh Garlic and Onion powders, delivering farm-to-market excellence worldwide.",
      delay: "0.3s"
    },
    {
      icon: "🌶️",
      title: "Authentic Spices",
      description:
        "We export and import the finest spices, bringing rich flavors and aromas to kitchens worldwide.",
      delay: "0.9s"
    },
    {
      icon: "🚛",
      title: "Reliable Global Trade",
      description:
        "With a strong logistics network, we ensure timely and secure delivery of products worldwide.",
      delay: "1.2s"
    },
    {
      icon: "🤝",
      title: "Customer Satisfaction First",
      description:
        "We focus on long-term relationships by offering exceptional service, reliability, and trust.",
      delay: "1.5s"
    }
  ];

  return (
    <Box
      sx={{
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 10 },
        textAlign: "center",
        bgcolor: "#F7F3F3",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "#4A2C2C",
          mb: 4,
        }}
      >
        Why Choose Unispeherexim ?
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              textAlign: "center",
              mt: index >= 3 ? { xs: 4, md: 6 } : 0
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 1,
                animation: "float 3s infinite ease-in-out",
                animationDelay: feature.delay,
                ...floatAnimation,
                color: "#4A2C2C",
              }}
            >
              {feature.icon}
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                animation: "float 3s infinite ease-in-out",
                animationDelay: feature.delay,
                ...floatAnimation,
                color: "#4A2C2C",
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                animation: "float 3s infinite ease-in-out",
                animationDelay: feature.delay,
                ...floatAnimation,
                color: "#333",
              }}
            >
              {feature.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
