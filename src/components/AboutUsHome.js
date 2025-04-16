import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const AboutUsHome = () => {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      {/* Main Light Beige Section */}
      <Box
        sx={{
          backgroundColor: "white", // Light beige
          color: "black", // Dark green text for contrast
          flex: 1,
          padding: { xs: 3, md: 6 },
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography variant="subtitle2" gutterBottom>
            Experience
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            About us
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
          IndoZen Global is a dynamic exporter dedicated to delivering high-quality
food products across the globe. Based in India, we specialize in a wide range
of onion powders and premium Makhana varieties, meeting the demands of
international markets with integrity and excellence.
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            We have over 3 decades experience in sourcing, merchandising, buying & trading commodities across various product categories. As a leading Merchant Exporter, we are a team of passionate business professionals, with a hands-on approach towards business. Our endeavour is to keep up to the promise & deliver beyond satisfaction.
          </Typography>
        </motion.div>

        {/* Stats Section */}
        <Grid container spacing={4} alignItems="center">
          {[ 
            { value: 50, label: "Countries We Export To" },
            { value: 1000, label: "Happy Clients Worldwide" },
            { value: 500, label: "Successful Shipments" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div initial="hidden" animate="visible" variants={statVariants}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  <CountUp start={0} end={stat.value} duration={2} />+
                </Typography>
                <Typography variant="body2">{stat.label}</Typography>
              </motion.div>
            </Grid>
          ))}
          {/* About Us Button */}
          <Grid item xs={12} sm={4}>
            <Button 
              variant="contained" 
              color="white" 
              
              onClick={() => navigate("/about-us")}
              sx={{ mt: 2,borderRadius:25,backgroundColor:'black',color:'white',padding:2 }}
            >
              Read more About Us
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Sidebar with Vertical Text */}
      <Box
        sx={{
          backgroundColor: "white", // Slightly darker beige
          width: { xs: "40px", md: "100px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight:'3px solid',
          textAlign: "center",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          padding: 2,
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#E0A800" }}>
            I N D O G E N
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutUsHome;