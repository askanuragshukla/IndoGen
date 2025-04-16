import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const OurCollections = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      {/* Title and Subtitle */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Our <span style={{ color: "#888" }}>Collections</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            maxWidth: "600px",
            margin: "10px auto",
          }}
        >
          Explore our diverse range of knitted bags, each thoughtfully designed
          to cater to your needs and style preferences.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {/* Card 1 */}
        <Card
          sx={{
            width: "30%",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="https://via.placeholder.com/300x200?text=Crossbody+Bags"
            alt="Crossbody Bags"
          />
          <CardContent sx={{ backgroundColor: "#ffe082" }}>
            <Typography variant="h6" fontWeight="bold">
              Crossbody Bags
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Convenient and chic, ideal for hands-free outings.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                textTransform: "none",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Discover More
            </Button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            width: "30%",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="https://via.placeholder.com/300x200?text=Backpacks"
            alt="Backpacks"
          />
          <CardContent sx={{ backgroundColor: "#dcedc8" }}>
            <Typography variant="h6" fontWeight="bold">
              Backpacks
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Functional and fashionable, great for your on-the-go lifestyle.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                textTransform: "none",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Discover More
            </Button>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            width: "30%",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="https://via.placeholder.com/300x200?text=Clutches"
            alt="Clutches"
          />
          <CardContent sx={{ backgroundColor: "#eeeeee" }}>
            <Typography variant="h6" fontWeight="bold">
              Clutches
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Elegant and compact, perfect for special occasions.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                textTransform: "none",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Discover More
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Bottom Buttons and Text */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderColor: "#000",
              color: "#000",
              borderRadius: "30px",
              padding: "10px 20px",
              "&:hover": {
                borderColor: "#333",
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            New Collection
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#8bc34a",
              color: "#fff",
              borderRadius: "30px",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#7cb342",
              },
            }}
          >
            Sale Collection
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#666",
            maxWidth: "500px",
            textAlign: "right",
          }}
        >
          Each of our bags is meticulously crafted by skilled artisans using
          high-quality, eco-friendly materials. Our mission is to provide you
          with accessories that are not only stylish but also sustainable and
          ethically made.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurCollections;
