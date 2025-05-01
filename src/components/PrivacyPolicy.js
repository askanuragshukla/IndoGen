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
import { MailLock, MailOutline, Person2Rounded } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import aboutusbnanner from './images/aboutusban.avif'
const SectionTitle = styled(Typography)({
    fontSize: "4rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    textAlign: "center",
    color: "#000",
    marginBottom: "1rem",
  });

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
  backgroundImage: `url('https://cdni.iconscout.com/illustration/premium/thumb/PrivacyPolicy-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912020.png?f=webp')`,
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



const PrivacyPolicy = () => {

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
          <Container sx={{ paddingY: "50px", width: "100%" }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" marginBottom={3}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", marginBottom: "30px", color: "text.secondary" }}>
        At Indozen, we respect your privacy and are committed to protecting any personal information you provide while using our website www.Indozen.com. This Privacy Policy outlines what data we collect, how we use it, and your rights regarding your information.
      </Typography>
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              1. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
              We do not collect any personal data from visitors except when they voluntarily provide it through our Contact Us form. The information collected includes:
            </Typography>
            <ul>
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Message Content</li>
            </ul>
            <Typography variant="body1" paragraph>
              We do not use cookies, tracking technologies, or third-party analytics tools to collect any additional user data.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              The information provided through the Contact Us form is used only for:
            </Typography>
            <ul>
              <li>Responding to inquiries and business inquiries.</li>
              <li>Providing requested information about our products and services.</li>
              <li>Communicating regarding potential business collaborations.</li>
            </ul>
            <Typography variant="body1" paragraph>
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              3. Data Protection & Storage
            </Typography>
            <Typography variant="body1" paragraph>
              We take appropriate security measures to protect the information submitted via our Contact Us form. Any data shared with us is stored securely and only accessible to authorized personnel.
            </Typography>
            <Typography variant="body1" paragraph>
              We do not retain personal data for longer than necessary. Once the purpose of communication is fulfilled, we securely delete user information unless required for legal or compliance reasons.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              4. Legal Basis for Processing (For EU Users – GDPR Compliance)
            </Typography>
            <Typography variant="body1" paragraph>
              Under the General Data Protection Regulation (GDPR), we process your data based on legitimate interest, as you voluntarily provide your contact details to communicate with us.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              5. Your Rights (For EU Users)
            </Typography>
            <Typography variant="body1" paragraph>
              If you are a resident of the European Economic Area (EEA), you have the following rights:
            </Typography>
            <ul>
              <li>Right to Access – Request a copy of the personal data we have about you.</li>
              <li>Right to Rectification – Request corrections to any inaccurate or incomplete data.</li>
              <li>Right to Erasure ("Right to be Forgotten") – Request deletion of your personal data.</li>
              <li>Right to Object – Object to the processing of your data for specific purposes.</li>
            </ul>
            <Typography variant="body1" paragraph>
              To exercise these rights, please contact us at [Insert Contact Email].
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              6. Third-Party Links
            </Typography>
            <Typography variant="body1" paragraph>
              Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices of external sites. We encourage users to review the privacy policies of those websites before providing any personal data.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              7. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We may update this Privacy Policy occasionally. Any changes will be posted on this page with the updated effective date.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold">
              8. Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </Typography>
            <Typography variant="body1">
              📧 Email: info@Indozen.com
            </Typography>
            <Typography variant="body1">
              📍 Address: Navi Mumbai, Maharashtra, India
            </Typography>
            <Typography variant="body1">
              📞 Phone: +91 7021969470
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Background>
  );
};

export default PrivacyPolicy;
