import React,{useState} from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  Avatar,
} from "@mui/material";
import { keyframes, styled } from "@mui/system";
import BusinessIcon from "@mui/icons-material/Business";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { LanguageSharp, MailLock, MailOutline, Person2Rounded } from "@mui/icons-material";
import emailjs from "@emailjs/browser";


const randomFloatAnimation = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(10px, -15px) rotate(10deg); }
  50% { transform: translate(-10px, 10px) rotate(-10deg); }
  75% { transform: translate(15px, -10px) rotate(5deg); }
  100% { transform: translate(0, 0); }
`;

const GradientBox = styled(Box)({
  position: "relative",
  background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
  padding: "4rem 0",
  textAlign: "center",
  color: "white",
  overflow: "hidden",
});


const FloatingAvatar = styled(Avatar)(({ delay }) => ({
  position: "absolute",
  width: 50,
  height: 50,
  border: "2px solid white",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  animation: `${randomFloatAnimation} ${
    Math.random() * 4 + 3
  }s infinite ease-in-out`,
  animationDelay: delay,
}));

const avatarPositions = [
  { top: "10%", left: "15%" },
  { top: "15%", right: "20%" },
  { top: "30%", left: "50%" },
  { top: "20%", right: "40%" },
  { top: "35%", left: "10%" },
  { top: "40%", right: "5%" },
];



const Background = styled(Box)({
  backgroundImage: `url('https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912020.png?f=webp')`,
  backgroundRepeat:'no-repeat',
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "60px 0",
});

const GlassCard = styled(Paper)({
  background: "rgba(30, 30, 30, 0.9)",
  backdropFilter: "blur(8px)",
  borderRadius: "20px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
  padding: "40px",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.7)",
  },
});

const StyledButton = styled(Button)({
  background: "linear-gradient(135deg, #333333, #444444)",
  color: "#f5f5f5",
  padding: "12px 36px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "30px",
  textTransform: "none",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(135deg, #444444, #555555)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
  },
});

const InfoRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  "& svg": {
    color: "#fff", // Gold accent for icons
    marginRight: "16px",
    fontSize: "28px",
  },
});



const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  
  return (
    <Background>
      <Container maxWidth="lg">
    
        
        
        
   
        <Grid container spacing={5} alignItems="center">
          {/* Contact Information Section */}
          <Grid item xs={12} md={4}>
          <GlassCard>
  <Typography
    variant="h3"
    component="h2"
    sx={{
      fontWeight: "bold",
      color: "white",
      marginBottom: "20px",
    }}
  >
    Get in Touch
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontWeight: "medium",
      color: "#D4C9B6",
      marginBottom: "20px",
    }}
  >
    Reach out to us for any inquiries or business collaborations.
  </Typography>
  <InfoRow>
    <BusinessIcon />
    <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
      IndoZen Global
    </Typography>
  </InfoRow>
  {/* <InfoRow>
    <Person2Rounded />
    <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
      Owner Name (CEO)
    </Typography>
  </InfoRow> */}
  <InfoRow>
    <MailOutlineIcon />
    <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
    info@IndoZenglobal.com
    </Typography>
  </InfoRow>
  <InfoRow>
    <PhoneInTalkIcon />
    <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
      +91  8828281064
    </Typography>
  </InfoRow>
  <InfoRow>
    <LocationOnIcon />
    <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
      IndoZen's office address
    </Typography>
  </InfoRow>
  <InfoRow>
    <LanguageSharp />
    <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
      <a href="www.IndoZenglobal.com" style={{ color: "#e0e0e0", textDecoration: "none" }}>
      www.IndoZenglobal.com

      </a>
    </Typography>
  </InfoRow>
</GlassCard>
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} md={8}>
            <GlassCard>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                }}
              >
                Send Us a Message
              </Typography>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      onChange={handleChange}
                      value={formData.firstName}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      value={formData.lastName}

                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      name="email"
                      value={formData.email}

                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#757575",
                          },
                          "&:hover fieldset": {
                            borderColor: "#999999",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                          },
                        },
                        "& .MuiInputBase-input": { color: "#ffffff" },
                        "& .MuiInputLabel-root": { color: "#bdbdbd" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledButton variant="contained" type="submit">
                      Submit
                    </StyledButton>
                  </Grid>
                </Grid>
              </form>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>
    </Background>
  );
};

export default Contact;
