import { PlayArrow } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const ThriveSection = () => {
  return (
    <Box style={{ backgroundColor: "black", color: "white", padding: "40px", display: "flex", alignItems: "center" }}>
      <Box style={{ maxWidth: "640px" }}>
        <Typography variant="h1" style={{ fontSize: "48px", fontWeight: "bold", lineHeight: "1.2" }}>
          WHERE YOU <span style={{ color: "#b0b0b0" }}>THRIVE</span> <br />
          <span style={{ color: "#d0d0d0" }}>TOGETHER.</span>
        </Typography>
        <Typography variant="body1" style={{ marginTop: "16px", fontSize: "18px", color: "#b0b0b0", maxWidth: "480px" }}>
          In our welcoming community, you’ll find understanding and support from people
          who share similar experiences and challenges. We're here for you every step of your journey.
        </Typography>
      </Box>
      <Box style={{ marginLeft: "24px", cursor: "pointer", position: "relative" }}>
        <Box style={{ width: "144px", height: "64px", borderRadius: "32px", overflow: "hidden", backgroundColor: "#505050", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <img
            src="/mnt/data/image.png"
            alt="Community Support"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PlayArrow style={{ color: "white", fontSize: "32px" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThriveSection;