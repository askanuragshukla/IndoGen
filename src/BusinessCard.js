import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const BusinessCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius:25,
        marginBottom:10,
        marginTop:10,
        color: "white",
        padding: 4,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Address */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          }}
        >
          <LocationOnIcon fontSize="large" style={{ color: "white" }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Address
          </Typography>
          <Typography variant="body2">
          www.indozenglobal.com

          </Typography>
        </Box>
      </Box>

      {/* Contact */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          }}
        >
          <CallIcon fontSize="large" style={{ color: "white" }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Contact
          </Typography>
          <Typography variant="body2">+91 8828281064</Typography>
        </Box>
      </Box>

      {/* Email */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          }}
        >
          <EmailIcon fontSize="large" style={{ color: "white" }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Email
          </Typography>
          <Typography variant="body2">info@indozenglobal.com
          </Typography>
        </Box>
      </Box>

      {/* Website */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          }}
        >
          <LanguageIcon fontSize="large" style={{ color: "white" }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Website
          </Typography>
          <Typography variant="body2">www.indozenglobal.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessCard;
