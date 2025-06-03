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
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
      }}
    >
      {/* Main Content Section */}
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          flex: 1,
          padding: { xs: 3, md: 6 },
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
    
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            About us
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 4, fontSize: { xs: "0.95rem", md: "1rem" } }}
          >
            Indozen Global is a dynamic exporter dedicated to delivering
            high-quality food products across the globe. Based in India, we
            specialize in a wide range of onion powders and premium Makhana
            varieties, meeting international market demands with integrity and
            excellence.
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 4, fontSize: { xs: "0.95rem", md: "1rem" } }}
          >
            With over new experience in sourcing, merchandising,
            buying, and trading commodities across various categories, we are a
            leading merchant exporter. Our team of passionate business
            professionals takes a hands-on approach to business, consistently
            striving to keep promises and deliver beyond expectations.
          </Typography>
        </motion.div>

        {/* Stats Section */}
        <Grid container spacing={4} alignItems="center">
          {/* {[
            { value: 50, label: "Countries We Export To" },
            { value: 1000, label: "Happy Clients Worldwide" },
            { value: 500, label: "Successful Shipments" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div initial="hidden" animate="visible" variants={statVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.8rem", md: "2rem" },
                  }}
                >
                  <CountUp start={0} end={stat.value} duration={2} />+
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem" } }}>
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))} */}

          {/* About Us Button */}
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              onClick={() => navigate("/about-us")}
              sx={{
                mt: 2,
                borderRadius: 25,
                backgroundColor: "black",
                color: "white",
                paddingX: 3,
                paddingY: 1.5,
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              Read more About Us
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Vertical Sidebar Text */}
      <Box
        sx={{
          backgroundColor: "white",
          width: { xs: "0px", md: "100px" },
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          borderRight: "3px solid",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          padding: 2,
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#E0A800", letterSpacing: "0.2em" }}
          >
            Indozen
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutUsHome;
