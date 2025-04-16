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
                 Why INDOGEN?
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
  <Typography variant='p' style={{textAlign:'center', fontWeight:'bold',marginTop:3,marginBottom:20,color:'grey',fontFamily: "'Roboto', sans-serif" }}>While we focus on key products, wherein we have our expertise, we are always open to source new & innovative products for our clients, from across all industries. Indogen can procure any product, irrespective of the region / country, as we are backed by a solid sourcing back ground. We have a solid network & database of suppliers from all geographies. You name it, we source it </Typography>
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
                {/* <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#FF665A',
                    color: '#fff',
                    borderRadius: '20px',
                    px: 3,
                    '&:hover': {
                      backgroundColor: '#E5554D',
                    },
                  }}
                >
                  View More
                </Button> */}
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
    title: 'White  Powder',
    description: 'A fine, aromatic powder made from dehydrated white onion, perfect for enhancing flavor in dishes.',
    image: whiteonionpowderimg,
    icon: <LocalFloristIcon />, 
  },
  {
    id: 2,
    title: 'Red Onion Powder',
    description: 'A versatile spice made from dehydrated onions, ideal for adding depth to recipes.',
    image: onionpowderimg,
    icon: <RiceBowlIcon />, 
  },
  {
    id: 3,
    title: 'Falvour Makhanas',
    description: 'A delightful collection of flavours all the way from india. we deal in fresh Mint, Tomato, peri Peri etc.., flavours',
    image: flavourmakhana,
    icon: <GrainIcon />, 
  },
  {
    id: 4,
    title: 'Raw Makhana',
    description: 'Fresh roasted raw Makhana commonly also known as Fox nuts all the way from india',
    image: rawmakhanaimg,
    icon: <GrainIcon />, 
  },
  
];
const servicesData2 = [
  {
    id: 1,
    title: 'Website Design',
    description: 'Craft visually stunning and user-friendly website designs that captivate your audience.',
    image: webdesign,
    icon: <LocalFloristIcon />, 
  },
  {
    id: 2,
    title: 'Website Development',
    description: 'Develop robust and scalable websites with the latest technologies and frameworks.',
    image: webdevelopment,
    icon: <RiceBowlIcon />, 
  },
  {
    id: 3,
    title: 'Logo Design',
    description: 'Create unique and memorable logos that represent your brand identity.',
    image: logodesign,
    icon: <GrainIcon />, 
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Boost your online presence and reach your target audience through effective digital marketing strategies.',
    image: digitalmarketing,
    icon: <GrainIcon />, 
  },
];



export default Products;
