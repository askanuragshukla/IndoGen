import React from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';
import { motion } from 'framer-motion';
import Hero from './Hero';
// import Testimonials from './Testimonials';
import OurServices from './OurServices';
import WeAreZens from './WeAreZens';
import RecentProject from './RecontProject';
import sm1 from './images/sm1.jpeg';
import WhyChooseUs from './WhyChooseUs';
import { Box, styled } from '@mui/system';
import TrustedByLeaders from './TruestedByLeaders';
import TrustedLeaders from './TrustedLeaders';
import aboutusbnanner from './images/whiteonion.jpg'
const SectionTitle = styled(Typography)({
  fontSize: "4rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  textAlign: "center",
  color: "#000",
  marginBottom: "1rem",
});

const About = ({setActivePage}) => {
  return (
    <div style={{backgroundColor:'white'}}>
      {/* Hero Section */}
      <style>
        {`
          @keyframes floating {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Hero />
      <Container sx={{ paddingY: '50px',width:'100%' }}>
        <SectionTitle>About Us</SectionTitle>
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '30px', color: 'text.secondary' }}>
          Expertise, creativity, and quality define our approach. Discover how we bring your visions to life with innovative solutions.
        </Typography>
        {/* <WhyChooseUs />
        */}
          <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            Indozen 
          </Typography>
          <Typography variant="body1" paragraph>
            Indozen  is a reputed & reliable Merchant Exporter, established and backed by a 3rd generation business house. We believe that business grows on faith & trust, along with commitment & passion. We export products with a complete check on Quality, Vendor Scrutiny, and Traceability. We offer products/produce to our clients, with a complete check on all parameters of product specifications. Our experienced team is equipped to source the best products at the best price in the best timelines.
          </Typography>
          <Typography variant="body1" paragraph>
            We have new experience in sourcing, merchandising, buying & trading commodities across various product categories. As a leading Merchant Exporter, we are a team of passionate business professionals, with a hands-on approach towards business. Our endeavor is to keep up to the promise & deliver beyond satisfaction.
          </Typography>
          <Typography variant="body1">
            <strong>Indozen </strong> is a perfect blend of experienced professionals with solid experience in technical, commercial, trading/logistics, and financial backgrounds. What sets <strong>Indozen </strong> apart is that we provide a price advantage, personalized service, and also encourage orders of all sizes & volumes.
          </Typography>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={aboutusbnanner} // Replace with actual image path
            alt="Indozen "
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
    <Grid item xs={12} md={6}>
          

          <Typography variant="body1" paragraph>
            We offer constant feedback to our clients and suppliers on the nature of the product, its availability, and also track the container’s whereabouts and distance from the destination. We provide a one-stop solution for all the requirements of our clients—from sourcing to shipment, from logistics support to delivery.
          </Typography>

          <Typography variant="body1" paragraph>
            At Indozen , our ideology (management mantra) is{" "}
            <strong>“Nothing, but the Best”</strong>, and this ideology is percolated across our business processes. We aim to provide a trustworthy & faithful relationship with all our suppliers, buyers, importers, exporters, and channel partners.
          </Typography>

          {/* <Typography variant="body1" paragraph>
            Indozen  is a reputed exporter from India, with excellent sourcing skills developed over decades with the best manufacturers. We can source a wide range of product categories, including <strong>Natural Stones (Granite & Marbles), Spices, Food grains & pulses, Building materials, and Engineering products</strong>.
          </Typography> */}

          <Typography variant="body1" fontWeight="bold" color="error">
            Indozen  does <strong>NOT</strong> export any animal meat, produce, or by-products.
          </Typography>
        </Grid>
        
       
        
      </Container>
      <OurServices />
    
      {/* <RecentProject /> */}
    </div>
  );
};

export default About;
