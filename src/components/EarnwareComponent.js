import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import SpotifyLogo from "@mui/icons-material/MusicNote";
import UberLogo from "@mui/icons-material/LocalTaxi";
import AmazonLogo from "@mui/icons-material/ShoppingCart";
import NetflixLogo from "@mui/icons-material/Movie";

const EarnwareComponent = () => {
  const [activeCard, setActiveCard] = useState(1); // Default active card

  const cardStyles = (index) => ({
    transform: activeCard === index ? "scale(1.1)" : "scale(0.95)",
    zIndex: activeCard === index ? 2 : 1,
    boxShadow: activeCard === index ? "0px 10px 30px rgba(0,0,0,0.2)" : "0px 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  });

  return (
    <Box sx={{ p: 4, textAlign: "center", bgcolor: "#f8fafd", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Connect. Learn. Earn.
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Your data is a profitable asset. With Earnware, you control what data to share anonymously and earn from it.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center", position: "relative" }}>
        {/* Earnings Card */}
        <Grid item xs={12} md={4} onClick={() => setActiveCard(1)} sx={cardStyles(1)}>
          <Card sx={{ p: 2, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Your earnings
              </Typography>
              <Typography variant="h3" fontWeight={600}>
                $30.00
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Next payout in: <strong>10,550 pts</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Connect Sources Card */}
        <Grid item xs={12} md={4} onClick={() => setActiveCard(2)} sx={cardStyles(2)}>
          <Card sx={{ p: 2, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Connect sources
              </Typography>
              <Box display="flex" justifyContent="center" gap={2}>
                <SpotifyLogo fontSize="large" color="success" />
                <UberLogo fontSize="large" color="action" />
                <AmazonLogo fontSize="large" color="warning" />
                <NetflixLogo fontSize="large" color="error" />
              </Box>
              <Button
                variant="contained"
                sx={{ mt: 2, bgcolor: "#000", color: "#fff", borderRadius: 2 }}
                startIcon={<AppleIcon />}
              >
                Download on the App Store
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Insights Card */}
        <Grid item xs={12} md={4} onClick={() => setActiveCard(3)} sx={cardStyles(3)}>
          <Card sx={{ p: 2, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Learn more from your data and make better decisions
              </Typography>
              <Typography variant="body2" color="textSecondary">
                - Any products I should be interested in?
              </Typography>
              <Typography variant="body2" color="textSecondary">
                - Where do I mostly shop during winter season?
              </Typography>
              <Typography variant="body2" color="textSecondary">
                - How much money I saved on discounts?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EarnwareComponent;
