import React, { useState } from 'react';
import {
  Container, Typography, Grid, Card, CardContent, CardMedia,
  Box, Button
} from '@mui/material';
import { styled } from '@mui/system';
import GrainIcon from '@mui/icons-material/Grain';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PeriPerioMakhana from "../components/images/PeriPerioMakhana.webp";
import PudinaMakahana from "../components/images/PudinaMakahana.jpg";
import RoastedMakahana from "../components/images/RoastedMakahana.webp";
import phoolmakhana from "../components/images/phoolmakhana.jpg";
import SweetMakhana from "../components/images/SweetMakhana.jpg";
import RedAndPinkPowder from "../components/images/RedAndPinkPowder.jpg";
import DehydratedWhiteOnionPowder from "../components/images/DehydratedwhiteOnionPowder.jpg";
import pinkonionpowder from "../components/images/pinkonionPowder.jpg"

const Background = styled(Box)(() => ({
  backgroundImage: `url('https://media.istockphoto.com/id/1366928508/photo/garlic-powder.jpg?s=612x612&w=0&k=20&c=f-CpEY6qMNOIzcx8jKveQRn3jGGDS8JrcRWHAvMkal0=')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  color: "white",
  filter: "brightness(0.5)",
}));

const SectionTitle = styled(Typography)(() => ({
  fontSize: "4rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  textAlign: "center",
  color: "#000",
  marginBottom: "1rem",
}));

const Products = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Background>
        <SectionTitle style={{ color: 'white' }}>
          Our Products and Brochures
        </SectionTitle>
        <Typography sx={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', marginBottom: '30px', color: 'white' }}>
          We bridge the gap between international markets, offering seamless export solutions that ensure timely delivery, cost-efficiency, and high-quality service.
        </Typography>
      </Background>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant='h2' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 3, marginBottom: 2 }}>
          Our Offerings
        </Typography>
        <Typography variant='body1' style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 10, color: 'grey', fontFamily: "'Roboto', sans-serif" }}>
          While we focus on key products, wherein we have our expertise, we are always open to source new & innovative products for our clients, from across all industries. IndoZen can procure any product, irrespective of the region / country, as we are backed by a solid sourcing background. We have a solid network & database of suppliers from all geographies. You name it, we source it.
        </Typography>

        <Grid container spacing={4}>
          {servicesData.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card
                sx={{
                  height: 420,
                  borderRadius: '16px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                  backgroundColor: '#1F473E',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={service.title}
                  height="200"
                  image={service.image}
                />
                <CardContent sx={{ textAlign: 'center', color: '#fff', backgroundColor: 'black', p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="#D4C9B6" paragraph>
                    {service.description}
                  </Typography>
                  <Button variant="outlined" color="inherit" onClick={() => handleClickOpen(service)}>
                    View More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog
  open={open}
  onClose={handleClose}
  maxWidth="md"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: 4,
      p: 2,
      backgroundColor: "#1e1e1e",
      color: "#f0f0f0",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)",
    },
  }}
>
  {/* Header with Close Button */}
  <Box display="flex" justifyContent="space-between" alignItems="center" px={2} pt={2}>
    <Typography variant="h5" fontWeight="bold" color="white">
      {selectedProduct?.title}
    </Typography>
    <IconButton onClick={handleClose} sx={{ color: "#bbb" }}>
      <CloseIcon />
    </IconButton>
  </Box>

  <DialogContent dividers sx={{ pt: 0, borderColor: "#333" }}>
    {/* Product Image */}
    <Box display="flex" justifyContent="center" my={2}>
      <img
        src={selectedProduct?.image}
        alt={selectedProduct?.title}
        style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 16,
          objectFit: "cover",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.05)",
        }}
      />
    </Box>

    {/* Description */}
    <DialogContentText
      sx={{
        fontSize: "1.05rem",
        color: "#ccc",
        lineHeight: 1.7,
        mt: 2,
        textAlign: "justify",
      }}
    >
      {selectedProduct?.detailedDescription}
    </DialogContentText>
  </DialogContent>
</Dialog>
      </Container>
    </>
  );
};
const servicesData = [
  {
    id: 1,
    title: "Peri Peri Makhana",
    description: "Roasted makhanas with Peri Peri seasoning.",
    detailedDescription:
      "Our Peri Peri Makhana is a bold and spicy twist on the classic fox nut snack. These premium-quality makhanas are dry roasted to perfection and generously coated with a tangy and spicy Peri Peri seasoning made from chili flakes, garlic, herbs, and lemon zest. Rich in protein, low in calories, and free from trans fats, this snack is perfect for those seeking flavor without compromising health. Ideal as an evening snack, gym-time munch, or travel companion.",
    image: PeriPerioMakhana,
    icon: <LocalFloristIcon />,
  },
  {
    id: 2,
    title: "Mint / Pudina Makhana",
    description: "Refreshing mint flavored roasted makhanas.",
    detailedDescription:
      "Experience a refreshing burst of cool mint with our Pudina Makhana. These makhanas are dry-roasted and lightly seasoned with a special blend of dried mint leaves, black salt, and herbs to offer a digestive, palate-refreshing snack. Perfect for those looking to curb cravings without indulging in oily foods. This snack supports gut health and is a must-have during fasting or detox days.",
    image: PudinaMakahana,
    icon: <RiceBowlIcon />,
  },
  {
    id: 3,
    title: "Roasted Makhana",
    description: "Wholesome, classic roasted makhanas.",
    detailedDescription:
      "Simple, pure, and healthy—our Roasted Makhana contains no added flavors or preservatives. Just slow-roasted fox nuts that retain their crunch and natural nutty flavor. Packed with antioxidants, calcium, and magnesium, this snack is great for all age groups. A perfect replacement for fried chips, it can be paired with tea, added to soups, or consumed directly to maintain energy levels throughout the day.",
    image: RoastedMakahana,
    icon: <GrainIcon />,
  },
  {
    id: 4,
    title: "Phool Makhana",
    description: "Premium unroasted fox nuts.",
    detailedDescription:
      "Phool Makhana, also known as lotus seeds or fox nuts, is an essential kitchen staple. These are sun-dried and untreated, maintaining their natural form and nutrients. Commonly used in Indian cuisine for making kheer, curries, or dry-roasted snacks. Rich in iron, protein, and fiber, they are ideal for fasting, weight loss diets, and general wellness. Can be roasted at home with spices or ghee for a customized snack.",
    image: phoolmakhana,
    icon: <GrainIcon />,
  },
  {
    id: 5,
    title: "Sweet Makhana",
    description: "Sweet-flavored crunchy snack.",
    detailedDescription:
      "A delicious fusion of health and indulgence, our Sweet Makhana is roasted and coated with natural sweeteners like jaggery or caramel. Perfect for kids and adults craving something sweet yet guilt-free. It provides energy, boosts digestion, and satisfies sugar cravings without harming your diet. Ideal for festive gifting, lunch boxes, or post-meal sweet tooth moments.",
    image: SweetMakhana,
    icon: <GrainIcon />,
  },
  {
    id: 6,
    title: "Dehydrated Red Onion Powder",
    description: "Organic red onion powder.",
    detailedDescription:
      "Made from fresh, organically grown red onions that are dehydrated and ground into a fine powder. This kitchen essential adds strong, slightly sweet onion flavor to any dish without the hassle of chopping. Ideal for use in sauces, gravies, spice blends, meat rubs, snacks, and ready-to-eat meals. Free from additives and preservatives, it's a shelf-stable must-have for home cooks and commercial kitchens alike.",
    image: RedAndPinkPowder,
    icon: <RiceBowlIcon />,
  },
  {
    id: 7,
    title: "Dehydrated White Onion Powder",
    description: "Fine white onion powder.",
    detailedDescription:
      "Our Dehydrated White Onion Powder is produced from premium-quality white onions, known for their mild and sweet flavor profile. This finely ground powder enhances the taste of a variety of dishes, including dips, soups, instant noodles, savory baked goods, and seasoning blends. It's a favorite in food manufacturing for its consistency, ease of use, and long shelf life. A cleaner, safer, and more efficient alternative to raw onions.",
    image: DehydratedWhiteOnionPowder,
    icon: <RiceBowlIcon />,
  },
  {
    id: 8,
    title: "Dehydrated Pink Onion Powder",
    description: "Aromatic pink onion powder.",
    detailedDescription:
      "Crafted from high-quality pink onions, our Dehydrated Pink Onion Powder delivers a balanced flavor that sits between the sharpness of red onions and the sweetness of white ones. Ideal for culinary professionals and home chefs, it enhances curries, marinades, soups, snacks, and spice mixes with its mild yet distinctive aroma. It's free from artificial colors, flavors, and preservatives—perfect for clean-label cooking.",
    image: pinkonionpowder, // Ensure you have this image asset imported
    icon: <RiceBowlIcon />,
  }
];

export default Products;
