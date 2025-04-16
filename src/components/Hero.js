import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import ricehdimages from './images/white-rice-in-sack-ai-generated-photo.jpg'
import cornhdimages from './images/cornhdlg.jpg'
import walnuthdimages from './images/walnutlghd.png'
import spicehdimages from './images/spiceshdlg.jpg'
import flvrmkhana from './images/flvrmkhanahdwlpr.jpg'
import lotusmkhana from './images/makhanahdimahewlpr.jpg'
import mkhana2 from './images/makahnahdwlpr2.jpg'






// Styled Box for the hero section with a dynamic background
const HeroBox = styled(Box)(({ theme, backgroundImage }) => ({
  color: 'white',
  backgroundColor: '#1a1a1a',
  backgroundImage: `url(${backgroundImage})`,
  //backgroundSize: 'cover',
  backgroundSize: 'cover', // Ensures the image covers the box completely
 // backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat', // Prevents tiling
  minHeight: '600px', 
  backgroundPosition: 'center',
  padding: theme.spacing(12),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6),
    textAlign: 'center',
  },
}));

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  const content = [
    {
      text: "ABOUT US",
      backgroundImage: "https://t3.ftcdn.net/jpg/09/90/14/22/360_F_990142251_RnKM29HEOCg3PbkWnSynKL8XHcL9IVPs.jpg",
    },
    {
      text: "We are committed to quality, consistency, and customer satisfaction. From sourcing to packaging, every step is governed by strict quality checks to ensure timely delivery and unmatched standards.",
      backgroundImage: "https://img.freepik.com/premium-photo/toys-collection-isolated-background_488220-2432.jpg?semt=ais_hybrid",
    },
    {
      text: "We promise transparency, reliability, and excellence in every trade. With a focus on building lasting partnerships, we aim to be your trusted global sourcing partner",
      backgroundImage: "https://yadavifood.com/images/product/red_onion_powder1.jpg",
    },
    
   
  ];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % content.length);
    }, 4000); // Change text and background every 4 seconds

    return () => clearInterval(intervalId);
  }, [content.length]);

  return (
    <>
      <style>{`
        .floating-text {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
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
      `}</style>

      <HeroBox backgroundImage={content[currentTextIndex].backgroundImage}>
        <Box sx={{ maxWidth: 800 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ lineHeight: 1.2 }}
            className="floating-text"
          >
            {content[currentTextIndex].text}
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
            Your gateway to premium Exported commodities. Experience quality and trust with us.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold">500+</Typography>
              <Typography variant="body2" color="grey.400">Products exported</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold">50K+</Typography>
              <Typography variant="body2" color="grey.400">Happy Clients</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold">4.9</Typography>
              <Typography variant="body2" color="grey.400">Customer Rating</Typography>
            </Grid>
          </Grid>
        </Box>
      </HeroBox>
    </>
  );
}
