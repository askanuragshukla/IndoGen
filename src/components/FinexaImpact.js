import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const data = [
  { title: "1M+ Users", subtitle: "Across all age groups" },
  { title: "50+ Countries", subtitle: "Finexa across borders" },
  { title: "500+ Resources", subtitle: "From articles to interactive tools" },
  { title: "4.7/5 User Satisfaction", subtitle: "Based on thousands of reviews" },
];

const FinexaImpact = () => {
  return (
    <Box sx={{ textAlign: "center", p: 4, bgcolor: "#f9f5f1" }}>
      <Typography variant="h4" fontWeight="bold">
        FINEXA'S PATH TO IMPACT
      </Typography>

      <Box
        component="img"
        src="/path-to-image.png" // Replace with your actual image path
        alt="Finexa"
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          display: "block",
          mx: "auto",
          my: 3,
          boxShadow: 3,
        }}
      />

      <Grid container spacing={2} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ bgcolor: "#fff8f0", borderRadius: 3, p: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FinexaImpact;
