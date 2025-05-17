import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BusinessCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Updated cardItem to support single or multiple icons
  const cardItem = (Icons, title, value, link = null) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: { xs: 3, sm: 0 },
        width: { xs: "100%", sm: "auto" },
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
        },
        borderRadius: 2,
        padding: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#222",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 2,
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {Array.isArray(Icons)
            ? Icons.map((Icon, i) => (
                <Icon key={i} fontSize="medium" style={{ color: "white" }} />
              ))
            : <Icons fontSize="large" style={{ color: "white" }} />}
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
            variant="body2"
          >
            {value}
          </Link>
        ) : (
          <Typography variant="body2">{value}</Typography>
        )}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 4,
        marginY: 5,
        color: "white",
        padding: { xs: 3, sm: 4 },
        textAlign: { xs: "center", sm: "left" },
        gap: { xs: 2, sm: 0 },
        flexWrap: "wrap",
      }}
    >
      {cardItem(
        [CallIcon, WhatsAppIcon],
        "Contact",
        "+91 8828281064",
        "https://wa.me/918828281064"
      )}
      {cardItem(
        EmailIcon,
        "Email",
        "info@indozenglobal.com",
        "mailto:info@indozenglobal.com"
      )}
      {cardItem(
        LanguageIcon,
        "Website",
        "www.indozenglobal.com",
        "https://www.indozenglobal.com"
      )}
      {cardItem(
        LinkedInIcon,
        "LinkedIn",
        "Visit our LinkedIn page",
        "https://www.linkedin.com/in/indozen-global-433736357"
      )}
      {cardItem(
        FacebookIcon,
        "Facebook",
        "Visit our Facebook page",
        "https://www.facebook.com/profile.php?id=61574039505185"
      )}
    </Box>
  );
};

export default BusinessCard;
