import React from 'react';
import { Box, Typography, Button, Grid, Link as MuiLink, Divider } from '@mui/material';
import { Link } from 'react-router-dom'; // Use this for routing

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: { xs: '40px 20px', sm: '50px 30px', md: '60px 40px' },
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          textAlign: { xs: 'center', sm: 'left' },
          gap: { xs: 3, sm: 0 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Georgia',
            fontStyle: 'italic',
            fontWeight: 400,
            maxWidth: { xs: '100%', sm: '80%' },
          }}
        >
          Connecting the World with Excellence in Import-Export Solutions
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '15px',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E0A800',
              color: 'white',
              '&:hover': { backgroundColor: '#E0A800' },
              textTransform: 'none',
              fontSize: '16px',
              padding: '10px 20px',
              borderRadius: 25,
            }}
            component={Link}
            to="/contact"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#E0A800',
              color: '#E0A800',
              textTransform: 'none',
              fontSize: '16px',
              borderRadius: 25,
              padding: '10px 20px',
              '&:hover': { borderColor: '#1A3F37', color: '#1A3F37' },
            }}
            component={Link}
            to="/about-us"
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: '#ffffff', height: '1px' }} />

      <Grid container spacing={0} sx={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about-us' },
              // { label: 'Courses', path: '/courses' },
              { label: 'Products', path: '/products' },
              { label: 'Contact', path: '/contact' },
              { label: 'Privacy Policy', path: '/privacy-policy' },
            ].map((item) => (
              <MuiLink
                key={item.label}
                component={Link}
                to={item.path}
                underline="none"
                color="inherit"
                sx={{ fontSize: '14px' }}
              >
                {item.label}
              </MuiLink>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
