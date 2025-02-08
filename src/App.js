import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BeautyFeatures from './components/BeautyFeatures';
import KeyFeatures from './components/KeyFeatures';
import RecommendedPackages from './components/RecommendedPackages';
// import SalonServices from './components/SalonServices';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import Brands from './components/Brands';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh'
        }}>
          <Navbar />
          <Hero />
          <Services />
          <KeyFeatures />
          {/* <SalonServices /> */}
          <Packages />
          <RecommendedPackages />
          <BeautyFeatures />
          <HowItWorks />
          <Brands />
          <Testimonials />
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
