import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import PrivacyPolicy from './components/PrivacyPolicy';

const theme = createTheme({
  typography: {
    fontFamily: '"Lora", serif', // Apply Lora font globally
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
