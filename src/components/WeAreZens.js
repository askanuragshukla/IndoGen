import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ramsagarbhai from './images/Ram sagar bhai.jpg';

const WeAreZens = ({setActivePage}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #4A2C2C, #4A2C2C, #4A2C2C)',
        color: '#fff',
        padding: { xs: '20px 15px', sm: '40px 30px', md: '40px 60px' },
        position: 'relative',
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '40px', sm: '60px', md: '120px' },
            fontWeight: 'bold',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Meet Our CEO
        </Typography>

        {/* <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '40px', sm: '60px', md: '120px' },
            fontWeight: 'bold',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          CEO
        </Typography> */}
      </Box>

      {/* Middle Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: { xs: 2, sm: 4 },
        }}
      >
        {/* Left Section */}
        <Box sx={{ position: 'relative', width: { xs: '100%', sm: '50%' } }}>
          <Box
            component="img"
            src={ramsagarbhai}
            alt="Agriculture Product"
            sx={{
              borderRadius: '8px',
              width: '100%',
              height: 'auto',
              maxWidth: '500px',
            }}
          />
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: { xs: '100%', sm: '45%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-start' },
            justifyContent: 'space-between',
            mt: { xs: 3, sm: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              lineHeight: 1.6,
              mb: 3,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            At Prince World Exim, we specialize in the import and export of
            premium agricultural products, including spices, corn, makhana,
            rice, and pulses. Our commitment to quality and timely delivery
            ensures we serve global markets with excellence.
          </Typography>

          <Avatar
            src="https://via.placeholder.com/80"
            alt="Ream Member"
            sx={{
              width: { xs: '60px', sm: '80px' },
              height: { xs: '60px', sm: '80px' },
              mb: 2,
            }}
          />

          <Typography sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <strong>Ram Sagar Sharma</strong>
            <br />
            Proprietor
          </Typography>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', sm: 'flex-start' },
          mt: { xs: 3, sm: 5 },
        }}
      >
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: '#fff',
            borderColor: '#fff',
            textTransform: 'none',
            borderRadius: '30px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
            mb: { xs: 2, sm: 0 },
          }}
         
        >
          Explore Our Products
        </Button>

        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: 1.6,
            maxWidth: '400px',
            textAlign: { xs: 'center', sm: 'right' },
          }}
        >
          Discover a world of high-quality agricultural products sourced
          directly from trusted farmers and delivered with precision to meet
          your business needs.
        </Typography>
      </Box>
    </Box>
  );
};

export default WeAreZens;
