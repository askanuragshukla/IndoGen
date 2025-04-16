import { Box, Typography, Button, Avatar } from "@mui/material";

const avatars = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg",
];

const TrustedLeaders = () => {
  return (
    <Box style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#D4C9B6", borderRadius: "16px" }}>
      <Box style={{ display: "flex", justifyContent: "center", position: "relative", gap: "30px", flexWrap: "wrap", margin: "auto" }}>
        {[0, 1, 2, 3, 4, 5,6].map((col, index) => (
          <Box key={index} style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: [1, 3, 5].includes(col) ? "40px" : "0px" }}>
            <Avatar src={avatars[col * 2]} style={{ width: "120px", height: "120px", borderRadius: "12px" }} />
            {![2, 3].includes(col) && (
              <Avatar src={avatars[col * 2 + 1]} style={{ width: "100px", height: "100px", borderRadius: "12px" }} />
            )}
          </Box>
        ))}
      </Box>
      <Typography variant="body2" style={{ background: "#e0e0e0", padding: "5px 10px", borderRadius: "8px", display: "inline-block", marginTop: "30px" }}>
        Testimonials
      </Typography>
      <Typography variant="h4" style={{ fontWeight: "bold", marginTop: "10px" }}>
        Trusted by leaders <br />
        <span style={{ color: "#1F473E" }}>from various industries</span>
      </Typography>
      <Typography variant="body1" style={{ marginTop: "10px", color: "#1F473E" }}>
        Learn why professionals trust our solutions to complete their customer journeys.
      </Typography>
      
    </Box>
  );
};

export default TrustedLeaders;
