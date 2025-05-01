import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const BusinessCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const cardItem = (IconComponent, title, value) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: { xs: 3, sm: 0 },
        width: { xs: "100%", sm: "auto" },
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
        <IconComponent fontSize="large" style={{ color: "white" }} />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2">{value}</Typography>
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
      {cardItem(LocationOnIcon, "Address", "www.indozenglobal.com")}
      {cardItem(CallIcon, "Contact", "+91 8828281064")}
      {cardItem(EmailIcon, "Email", "info@indozenglobal.com")}
      {cardItem(LanguageIcon, "Website", "www.indozenglobal.com")}
    </Box>
  );
};

export default BusinessCard;
