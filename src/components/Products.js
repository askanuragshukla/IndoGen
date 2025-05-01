import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import GrainIcon from '@mui/icons-material/Grain';
import sm1 from './images/sm1.jpeg'
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { motion } from 'framer-motion';
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
import mkhana2 from './images/makahnahdwlpr2.jpg'
import garlicpowderimg from './images/garlicpowder.jpg'
import onionpowderimg from './images/onionpowderhd.avif'
import babyToysImage from './images/toyshs.jpg'
import babyGarmentsImage from './images/Twinning_Girls_Boys_Set.webp'
import webdesign from './images/webdesign.jpg'
import webdevelopment from './images/webdev.png'
import logodesign from './images/logo desgin.jpg'
import digitalmarketing from './images/digitalmarketing.jpg'
import whiteonionpowderimg from './images/whiteonionpowder.webp'
import rawmakhanaimg from './images/Makhana-Namkeen-2-3.jpg'
import flavourmakhana from './images/flvrmkhanahdwlpr.jpg'
import PeriPerioMakhana from "../components/images/PeriPerioMakhana.webp";
import PudinaMakahana from "../components/images/PudinaMakahana.jpg";
import RoastedMakahana from "../components/images/RoastedMakahana.webp";
import phoolmakhana from "../components/images/phoolmakhana.jpg";
import SweetMakhana from "../components/images/SweetMakhana.jpg";
import RedAndPinkPowder from "../components/images/RedAndPinkPowder.jpg";
import DehydratedWhiteOnionPowder from "../components/images/DehydratedwhiteOnionPowder.jpg";

const Products = () => {
  
const Background = styled(Box)({
  backgroundImage: `url(${'https://media.istockphoto.com/id/1366928508/photo/garlic-powder.jpg?s=612x612&w=0&k=20&c=f-CpEY6qMNOIzcx8jKveQRn3jGGDS8JrcRWHAvMkal0='})`,
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
  filter: "brightness(0.5)",  // Darken background for readability
});
const SectionTitle = styled(Typography)({
  fontSize: "4rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  textAlign: "center",
  color: "#000",
  marginBottom: "1rem",
});

  return (
    <>
      <div >
       <Background>
               <SectionTitle style={{color:'white'}}>
                 Our Products and Brouchers
               </SectionTitle>
               <Typography sx={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', marginBottom: '30px',color:'white' }}>
                 We bridge the gap between international markets, offering seamless export solutions that ensure timely delivery, cost-efficiency, and high-quality service.
               </Typography>
               {/* <Typography variant="contained" sx={{  color: 'black', fontWeight: 'bold', borderRadius: '30px', padding: '10px 30px' }}>
                 Get Started
               </Typography> */}
             </Background>

<Container maxWidth="lg" sx={{ py: 5 }}>
  <Typography variant='h2' style={{textAlign:'center', fontWeight:'bold',marginTop:3,marginBottom:2}}>Our Offerings </Typography>
  <Typography variant='p' style={{textAlign:'center', fontWeight:'bold',marginTop:3,marginBottom:20,color:'grey',fontFamily: "'Roboto', sans-serif" }}>While we focus on key products, wherein we have our expertise, we are always open to source new & innovative products for our clients, from across all industries. Indozen can procure any product, irrespective of the region / country, as we are backed by a solid sourcing back ground. We have a solid network & database of suppliers from all geographies. You name it, we source it </Typography>
      <Grid container spacing={4} sx={{paddingTop:10}}>
        {servicesData.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                position: 'relative',
                height: 360,
                borderRadius: '16px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                backgroundColor:'#1F473E',
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
                sx={{
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  color:'#fff',
                  backgroundColor:'black',
                  p: 3,
                }}
              >
                {/* <Box
                  sx={{
                    mb: 2,
                    fontSize: 40,
                    color: '#FF665A',
                  }}
                >
                  {service.icon}
                </Box> */}
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: '"Roboto", sans-serif',
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="#D4C9B6"
                  paragraph
                  sx={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  {service.description}
                </Typography>
              
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
   


      </div>
    </>
  );
};

const servicesData = [
  {
    id: 1,
    title: "Peri Peri Makhana",
    description: "Finest quality roasted makhanas flavored with chef’s special Peri Peri seasoning.",
    image: PeriPerioMakhana,
    icon: <LocalFloristIcon />,
  },
  {
    id: 2,
    title: "Mint / Pudina Makhana",
    description: "Enjoy our roasted makhanas with a refreshing touch of mint flavour.",
    image: PudinaMakahana,
    icon: <RiceBowlIcon />,
  },
  {
    id: 3,
    title: "Roasted Makhana",
    description: "Classic roasted makhanas, prepared with care for a wholesome snack.",
    image: RoastedMakahana,
    icon: <GrainIcon />,
  },
  {
    id: 4,
    title: "Phool Makhana",
    description: "Farm-fresh, unroasted phool makhanas of the finest quality.",
    image: phoolmakhana,
    icon: <GrainIcon />,
  },
  {
    id: 5,
    title: "Sweet Makhana",
    description: "Delightful sweet-flavored makhanas — a perfect savory treat.",
    image: SweetMakhana,
    icon: <GrainIcon />,
  },
  {
    id: 6,
    title: "Dehydrated Red & Pink Onion Powder",
    description: "High-quality, organic dehydrated red and pink onion powders.",
    image: RedAndPinkPowder,
    icon: <RiceBowlIcon />,
  },
  {
    id: 7,
    title: "Dehydrated White Onion Powder",
    description: "Premium-grade, organic white onion powder for global trade.",
    image: DehydratedWhiteOnionPowder,
    icon: <RiceBowlIcon />,
  },
];



export default Products;
