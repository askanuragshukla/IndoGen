import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Owner, Mehta Kids Wear (India)",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    text: "IndoZen has been a game changer for our business. Their high-quality kids' garments and smooth delivery process have helped us scale tremendously!",
  },
  {
    name: "Sophia Carter",
    role: "Retailer, FreshFarm Organics (USA)",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    text: "The mangoes we received were absolutely fresh and delicious! IndoZen's packaging and timely delivery exceeded our expectations.",
  },
  {
    name: "Amit Sharma",
    role: "CEO, SpiceWorld Exports (India)",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    text: "We’ve been sourcing premium spices from IndoZen for years. Their commitment to quality and authenticity is unmatched!",
  },
 
];

const RecentProject = () => {
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
    <Box
      style={{
        textAlign: "center",
        padding: "60px 20px",
        backgroundColor: "black",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "20px",color:'white' }}>
        What Our Clients Says about Us<br />
        <span style={{ color: "#E0A800" }}>IndoZen's Global Trust</span>
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
          <Card
            key={index}
            sx={{
              minWidth: "300px",
              maxWidth: "350px",
              flexShrink: 0,
              padding: "20px",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50, mb: 2 }} />
              <Typography
                variant="body1"
                sx={{
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "block",
                  fontSize: "1rem",
                }}
              >
                "{testimonial.text}"
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {testimonial.role}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RecentProject;
