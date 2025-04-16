import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Patrick Nawrocki",
    role: "UX Manager at Superhabits",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
  },
  {
    name: "Pri Patel",
    role: "Product Designer at Lightdash",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "",
    video: true, // Represents a video testimonial
  },
  {
    name: "Rob West",
    role: "CEO of Kingdom Advisors",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
  },
  {
    name: "Pri Patel",
    role: "Product Designer at Lightdash",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "",
    video: true, // Represents a video testimonial
  },
  {
    name: "Rob West",
    role: "CEO of Kingdom Advisors",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
  },
  {
    name: "Pri Patel",
    role: "Product Designer at Lightdash",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "",
    video: true, // Represents a video testimonial
  },
  {
    name: "Rob West",
    role: "CEO of Kingdom Advisors",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
  },
  {
    name: "Pri Patel",
    role: "Product Designer at Lightdash",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "",
    video: true, // Represents a video testimonial
  },
  {
    name: "Rob West",
    role: "CEO of Kingdom Advisors",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
  },
  {
    name: "Pri Patel",
    role: "Product Designer at Lightdash",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "",
    video: true, // Represents a video testimonial
  },
  {
    name: "Rob West",
    role: "CEO of Kingdom Advisors",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
  },
];

const TrustedLeaders = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // Adjust scrolling speed

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += speed;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#D4C9B6", borderRadius: "16px" }}>
      <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "20px" }}>
        Don't take our word for it!<br />
        <span style={{ color: "#1F473E" }}>Hear it from our partners.</span>
      </Typography>
      
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          paddingBottom: "20px",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <Card key={index} sx={{ minWidth: "300px", maxWidth: "350px", flexShrink: 0, padding: "20px", borderRadius: "16px" }}>
            {testimonial.video ? (
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#ddd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                ▶
              </Box>
            ) : (
              <CardContent>
                <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50, mb: 2 }} />
                <Typography variant="body1">"{testimonial.text}"</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>{testimonial.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </CardContent>
            )}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TrustedLeaders;
