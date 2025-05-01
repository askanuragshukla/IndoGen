import React from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';
import { motion } from 'framer-motion';
import { Box, styled } from '@mui/system';
import WhyChooseUsHome from './WhyChooseUsHome';
import SlidableCards from './SlidableCards';
import Carousel from './Carousel';
import ExperienceSection from './ExperienceSection';
import WorkspaceSolutions from './WorkspaceSolutions';
import ControlledCarousel from './ControlledCarousel';
import apedalogo from './images/apeda.jpg'
import fssailog from './images/FSSAI_Logo.png'
import msmelog from './images/msme.jpg'
import AboutUsHome from './AboutUsHome';
import BusinessCard from '../BusinessCard';
const SectionTitle = styled(Typography)({
  fontSize: "4rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  textAlign: "center",
  color: "#000",
  marginBottom: "1rem",
});
const affiliations = [
  { src: apedalogo, alt: "APEDA" },
  { src: fssailog, alt: "FSSAI" },

  { src: msmelog, alt: "MSME" },

];

const Home = ({setActivePage}) => {
  return (
    <div style={{backgroundColor:'white'}}>
    <Carousel />
    {/* <ControlledCarousel /> */}
    <ExperienceSection />

    <AboutUsHome />
    <WorkspaceSolutions />
    
    <Container
      maxWidth={false}
      sx={{
        py: { xs: 4, sm: 6, md: 8 }, // responsive vertical padding
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Our Trust
        </SectionTitle>
      </motion.div>

      {/* Features Section */}
      <WhyChooseUsHome />

      {/* Empty Grid Placeholder (make it useful or remove) */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          px: { xs: 2, sm: 4 },
          mt: { xs: 4, sm: 6 },
          mb: { xs: 4, sm: 8 },
        }}
      >
        {/* Add responsive Grid items here if needed */}
      </Grid>
    </Container>






    <Box
      sx={{
        textAlign: "center",
        py: { xs: 4, sm: 6, md: 8 }, // Responsive vertical padding
        background: "transparent",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        color="text.primary"
        gutterBottom
        sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" } }}
      >
        Our Affiliations
      </Typography>

      <Box
        sx={{
          width: "50px",
          height: "3px",
          background: "#888",
          mx: "auto",
          mb: { xs: 4, sm: 5 },
        }}
      />

      <Grid
        container
        spacing={{ xs: 2, sm: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        {affiliations.map((affiliation, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.img
              src={affiliation.src}
              alt={affiliation.alt}
              style={{
                width: "100%",
                maxWidth: "120px",
                height: "auto",
                objectFit: "contain",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
{/* 
<SlidableCards /> */}
<BusinessCard />

    </div>
  );
};

export default Home;
