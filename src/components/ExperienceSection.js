



import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import counter1 from "./images/counter1.png";
import counter2 from "./images/counter2.png";
import counter3 from "./images/counter3.png";
import counter4 from "./images/counter4.png";

const stats = [
  { img: counter1, value: 5, label: "Countries" },
  { img: counter2, value: 100, label: "Quality Manufacturers" },
  { img: counter3, value: 100, label: "Products" },
  { img: counter4, value: 100, label: "Man-Years Experience" },
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
    <Box sx={{ backgroundColor: "black", py: 4, textAlign: "center" }}>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* <img src={stat.img} alt={stat.label} style={{ width: 80, height: 80 }} /> */}
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mt: 2 }}>
                {counts[index]}+
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
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
