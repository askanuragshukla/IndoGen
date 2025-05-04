import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

import PeriPerioMakhana from "../components/images/PeriPerioMakhana.webp";
import PudinaMakahana from "../components/images/PudinaMakahana.jpg";
import RoastedMakahana from "../components/images/RoastedMakahana.webp";
import phoolmakhana from "../components/images/phoolmakhana.jpg";
import SweetMakhana from "../components/images/SweetMakhana.jpg";
import RedAndPinkPowder from "../components/images/RedAndPinkPowder.jpg";
import DehydratedWhiteOnionPowder from "../components/images/DehydratedwhiteOnionPowder.jpg";
import PinkOnionPowder from "../components/images/pinkonionPowder.jpg"
const productOptions = [
  {
    title: "Peri Peri Makhana",
    description:
      "Finest quality roasted makhanas flavored with chef’s special Peri Peri seasoning.",
    img: PeriPerioMakhana,
  },
  {
    title: "Mint / Pudina Makhana",
    description:
      "Enjoy our roasted makhanas with a refreshing touch of mint flavour.",
    img: PudinaMakahana,
  },
  {
    title: "Roasted Makhana",
    description:
      "Classic roasted makhanas, prepared with care for a wholesome snack.",
    img: RoastedMakahana,
  },
  {
    title: "Phool Makhana",
    description:
      "Farm-fresh, unroasted phool makhanas of the finest quality.",
    img: phoolmakhana,
  },
  {
    title: "Sweet Makhana",
    description:
      "Delightful sweet-flavored makhanas — a perfect savory treat.",
    img: SweetMakhana,
  },
  {
    title: "Dehydrated Red Onion Powder",
    description:
      "High-quality, organic dehydrated red onion powders.",
    img: RedAndPinkPowder,
  },
  {
    title: "Dehydrated White Onion Powder",
    description:
      "Premium-grade, organic white onion powder for global trade.",
    img: DehydratedWhiteOnionPowder,
  },
  {
    title: "Dehydrated Pink Onion Powder",
    description:
      "Naturally processed pink onion powder, rich in flavor and aroma for diverse culinary applications.",
    img: PinkOnionPowder,
  },
];

const TradingSolutions = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        background: "linear-gradient(135deg, #1b1b1b, #131513)",
        color: "white",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          We Trade In
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {productOptions.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} display="flex">
        <motion.div
          style={{ flexGrow: 1, display: "flex" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <Card
            sx={{
              background: "linear-gradient(135deg, #b2b2b2, #d6d6d6)",
              borderRadius: "15px",
              overflow: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              flexGrow: 1,
            }}
          >
            <CardMedia
              component="img"
              image={product.img}
              alt={product.title}
              sx={{
                objectFit: "cover",
                height: { xs: 180, sm: 220, md: 250 },
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                {product.title}
              </Typography>
              <Typography variant="body2" color="black">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TradingSolutions;
