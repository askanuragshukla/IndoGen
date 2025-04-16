import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";

const productOptions = [
  { title: "Falvour Makhana's", 
    description: "With finest quality of Roasted makhana's we serve vivid falours including Tomato, Peri Peri, Mint and other flavours.", 
    img: "https://morbiwalasweets.com/cdn/shop/files/9_fc6a5795-b762-4923-9911-3dcaeadb2efa.png?v=1690317654" },

  { title: "Red and White onions", 
    description: "we trade in high and finest quality of organic Red and White Onion powders", 
    img: "https://st5.depositphotos.com/58021082/64722/i/450/depositphotos_647223668-stock-photo-red-onion-powder-wooden-spoon.jpg" },
  // { title: "Spices", description: "Authentic Indian spices, carefully sourced and exported globally.", img: "https://sulaindianrestaurant.com/wp-content/uploads/2020/12/Julne-blog-2017.jpg" },
  // { title: "Garlic Powder", description: "Fresh Garlic Powder harvested with care from best of indian farms.", img: "https://m.media-amazon.com/images/I/71m9dilposL.jpg" },
  // { title: "Onion Powder", description: "Fresh Onion Powder harvested with care from best of indian farms.", img: "https://img.freepik.com/premium-photo/onion-powder-wooden-bowl-fresh-red-onion-isolated-white-background-top-view-flat-lay_781325-20026.jpg?semt=ais_hybrid" },
];

const TradingSolutions = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        background: 'linear-gradient(135deg,rgb(27, 27, 27),rgb(19, 21, 19))',
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
          We Trade in
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {productOptions.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Animated Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  background: 'linear-gradient(135deg,rgb(178, 178, 178),rgb(214, 214, 214))',
                  color: "white",
                 
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia component="img" sx={{minHeight:100,maxHeight:300}} image={product.img} alt={product.title} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold",color:'black' }}>{product.title}</Typography>
                  <Typography variant="body2" color='black'>
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
