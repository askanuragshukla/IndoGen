import React from 'react';
import { Box, Typography, Button, Grid, Link, Divider } from '@mui/material';

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
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: '#ffffff', height: '1px' }} />

      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        {[
          { title: 'About Us', links: ['Our Mission', 'Leadership Team', 'Global Presence'] },
          { title: 'Services', links: ['Import Solutions', 'Export Solutions', 'Logistics Management'] },
          { title: 'Resources', links: ['Blog & Insights', 'Case Studies'] },
          { title: 'Contact', links: ['Get in Touch', 'Office Locations'] },
        ].map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>
              {section.title}
            </Typography>
            {section.links.map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                color="inherit"
                sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
              >
                {item}
              </Link>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
