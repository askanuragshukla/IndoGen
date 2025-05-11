import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import counter1 from "./images/counter1.png";
import counter2 from "./images/counter2.png";
import counter3 from "./images/counter3.png";
import counter4 from "./images/counter4.png";

const stats = [
  { img: counter1, value: null, label: "Global reach" },
  { img: counter2, value: null, label: "Trusted Manufacturers" },
  { img: counter3, value: null, label: "Premium Products" },
  { img: counter4, value: null, label: "Gaurenteed on Time Shipments" },
];

const ExperienceSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let currentCount = 0;
      const step = Math.ceil(stat.value / 50);
      const interval = setInterval(() => {
        currentCount += step;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(interval);
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = currentCount;
          return newCounts;
        });
      }, 30);
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: "black", py: { xs: 4, md: 6 }, textAlign: "center" }}>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                component="img"
                src={stat.img}
                alt={stat.label}
                sx={{ width: { xs: 50, sm: 70, md: 80 }, height: "auto" }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  mt: 2,
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" },
                }}
              >
                {counts[index]}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExperienceSection;
