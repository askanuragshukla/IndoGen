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
import garliconionPng from '../components/images/GarlicOnionPng.jpg'
import spiceprhdlg from './images/spicepr.jpg'
import makhananmk from './images/Makhana-Namkeen-2-3.jpg'
import chawalbr from './images/chawalbr.jpg'
import masale from './images/istockphoto-477756915-612x612.jpg'
import dals from './images/dals.jpg'
import dimaginuts from './images/dimagginuts.jpg'
import makhanajaggerycookies from './images/makhanajaggerycookies.webp'
import makhanaswtdryf from './images/dryfrtmixmakh.jpg'
import makhanapowder from './images/phool-makhana-powder.jpg'
import makhanaraw from './images/lotuspop.webp'
import makhanaflav from './images/Makhana-4-Flavours.webp'
import cornraw from './images/multicolorcorn_500x500.jpg'
import furnitures from './images/furnitures.jpg'
import flvrmkhana from './images/flvrmkhanahdwlpr.jpg'
import lotusmkhana from './images/makhanahdimahewlpr.jpg'
import worldmap from './images/World-Map.png'
import mkhana2 from './images/makahnahdwlpr2.jpg'
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
        paddingY: "50px",
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
        <SectionTitle>Our Trust</SectionTitle>
      </motion.div>

      {/* Description */}
     

      {/* Features Section */}
      <WhyChooseUsHome />
      <Grid
  container
  spacing={6}
  alignItems="center"
  justifyContent="center"
  sx={{
    padding: "2rem",
    marginTop: 0,
    marginBottom: 8,
  }}
>
{/* <Grid item xs={12} md={6}>
  <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: "#F4F1E6",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom:20,
           color: "#2E4A30",
          lineHeight: 1.4,
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3rem",
          },
        }}
      >
        We Deliver WORLDWIDE
      </Typography>

    
    </motion.div>
    <motion.img
      src="https://media.istockphoto.com/id/1404531423/photo/aerial-view-of-container-ship.jpg?s=612x612&w=0&k=20&c=1WoMJCCtFIXDrv3jmHJcf66RJmrscWwCskD_65IcFAw="
      alt="UnixSphere Growth"
      style={{
        height: "100%",
        width: "100%",
    
       // maxWidth: "550px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
  </Grid> */}
 


</Grid>
    </Container>






    <Box
      sx={{
        textAlign: "center",
        padding: "3rem 0",
        background: "transparent", // Transparent background
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        color="text.primary"
        gutterBottom
      >
       Our Affiliations
      </Typography>
      <Box
        sx={{
          width: "50px",
          height: "3px",
          background: "#888",
          margin: "0 auto 2rem",
        }}
      />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {affiliations.map((affiliation, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <motion.img
              src={affiliation.src}
              alt={affiliation.alt}
              style={{
                maxWidth: "150px", 
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
      {/* <OurServices /> */}
{/* <TrustedByLeaders />
<TrustedLeaders />       */}
      {/* Section with Image and Text */}
      {/* <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          background: 'linear-gradient(135deg, #4A2C2C, #4A2C2C, #4A2C2C)',
          padding: '2rem',
          marginTop: 0,
          marginBottom: 8,
        }}
      >
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <motion.img
            src={sm1}
            alt="Market Investment Illustration"
            style={{
              maxHeight: '100%',
              width: '100%',
              maxWidth: '450px',
              borderRadius: 25,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                lineHeight: 1.4,
                fontSize: { xs: '2rem', sm: '2.5rem' },
              }}
            >
              Expanding Global Trade, One Shipment at a Time
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              paragraph
              sx={{
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'white',
                maxWidth: '450px',
                marginBottom: '2rem',
                fontSize: { xs: '1rem', sm: '1.1rem' },
              }}
            >
              Revolutionizing global import and export with efficient processes,
              seamless operations, and a commitment to quality service for our
              clients worldwide.
            </Typography>

            {/* Cards for Total Shipments and Global Reach 
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    padding: '1.5rem',
                    backgroundColor: '#E5554D',
                    color: 'white',
                    '&:hover': { backgroundColor: '#d64d1c' },
                    textAlign: 'center',
                    boxShadow: 3,
                    borderRadius: 25,
                    animation: 'floating 2s infinite ease-in-out',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                    Total Shipments Handled
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      color: 'white',
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                    }}
                  >
                    500+
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    padding: '1.5rem',
                    backgroundColor: '#E5554D',
                    color: 'white',
                    '&:hover': { backgroundColor: '#d64d1c' },
                    textAlign: 'center',
                    boxShadow: 3,
                    borderRadius: 25,
                    animation: 'floating 2s infinite ease-in-out',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                    Countries Reach
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      color: 'white',
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                    }}
                  >
                    150+
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid> */}

      {/* Recent Projects Section */}
      {/* <RecentProject /> */}
    </div>
  );
};

export default Home;
