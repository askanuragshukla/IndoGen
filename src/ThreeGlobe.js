import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useRef } from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';
import { motion } from 'framer-motion';

const RotatingGlobe = () => {
  const globeRef = useRef();

  return (
    <mesh ref={globeRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color={"#00b894"}
        wireframe
      />
      <Stars radius={5} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </mesh>
  );
};

const GlobeSection = () => {
  return (
    <Canvas
    gl={{ antialias: true }}
    camera={{ position: [0, 0, 5], fov: 50 }}
    style={{ height: '500px', width: '500px' }}
  >
    <Suspense fallback={null}>
      <OrbitControls enableZoom={false} autoRotate />
      <Stars radius={300} depth={60} count={20000} factor={7} />
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial color="#1E90FF" wireframe />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </Suspense>
  </Canvas>
  );
};

const ThreeGlobe = () => {
  return (
    <Grid
      container
      spacing={6}
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "linear-gradient(135deg, #2E4A30, #1E3A20)",
        padding: "2rem",
        marginTop: 0,
        marginBottom: 8,
      }}
    >
      <Grid item xs={12} md={6}>
        <GlobeSection />
      </Grid>

      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#F4F1E6",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              lineHeight: 1.4,
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
              },
            }}
          >
            Growing with Trust & Excellence
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            paragraph
            sx={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "#D4C9B6",
              maxWidth: "450px",
              marginBottom: "2rem",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
            }}
          >
            At **Shree Sadguru Trading**, we believe in trust, quality, and long-term partnerships.  
            With years of expertise in the import-export industry, we have built a strong reputation for delivering premium kids' garments to markets worldwide.  
            Our commitment to excellence, customer satisfaction, and ethical business practices fuels our continuous growth.  
            Join us as we expand our reach, one trusted relationship at a time.
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ThreeGlobe;
