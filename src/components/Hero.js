import React from 'react';
import { Container, Typography, Box, Button, Grid, styled, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  padding: '120px 0 80px 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%238B7355\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.1,
  },
  [theme.breakpoints.down('md')]: {
    padding: '80px 0 60px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0 40px 0',
  }
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  animation: `${fadeIn} 1s ease-out`,
  fontSize: '3.5rem',
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  }
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(4),
  animation: `${fadeIn} 1s ease-out 0.3s both`,
  fontSize: '1.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    marginBottom: theme.spacing(3),
  }
}));

const HeroButton = styled(Button)(({ theme }) => ({
  padding: '12px 32px',
  fontSize: '1.1rem',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  animation: `${fadeIn} 1s ease-out 0.6s both`,
  [theme.breakpoints.down('sm')]: {
    padding: '10px 24px',
    fontSize: '1rem',
  }
}));

const ImageGrid = styled(Grid)(({ theme }) => ({
  animation: `${fadeIn} 1s ease-out 0.9s both`,
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(4),
  }
}));

const ImageCard = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(139, 115, 85, 0.15)',
  height: '200px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(139, 115, 85, 0) 0%, rgba(139, 115, 85, 0.1) 100%)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '150px',
    borderRadius: '12px',
  }
}));

const OfferBox = styled(Box)(({ theme }) => ({
  background: 'rgba(245, 245, 220, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(139, 115, 85, 0.1)',
  border: '1px solid rgba(139, 115, 85, 0.1)',
  animation: `${fadeIn} 1s ease-out 1.2s both`,
  '&:hover': {
    boxShadow: '0 12px 48px rgba(139, 115, 85, 0.15)',
    transform: 'translateY(-5px)',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    borderRadius: '12px',
  }
}));

const OfferText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 600,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  }
}));

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Grid container spacing={isTablet ? 3 : 6} alignItems="center">
          <Grid item xs={12} md={6}>
            <HeroTitle variant={isMobile ? "h3" : "h2"}>
              Professional Beauty Services at Your Doorstep
            </HeroTitle>
            <HeroSubtitle variant={isMobile ? "h6" : "h5"}>
              Experience salon-quality treatments in the comfort of your home
            </HeroSubtitle>
            <HeroButton variant="contained" disableElevation>
              Book Now
            </HeroButton>
            
            <OfferBox>
              <OfferText variant={isMobile ? "subtitle1" : "h6"}>
                Special Offer: 20% OFF on your first booking!
              </OfferText>
            </OfferBox>
          </Grid>
          
          <ImageGrid item xs={12} md={6}>
            <Grid container spacing={isMobile ? 1 : 2}>
              <Grid item xs={6}>
                <ImageCard>
                  <img src="/images/facial.jpg" alt="Beauty Service 1" />
                </ImageCard>
              </Grid>
              <Grid item xs={6}>
                <ImageCard>
                  <img src="/images/padicure.jpg" alt="Beauty Service 2" />
                </ImageCard>
              </Grid>
              <Grid item xs={6}>
                <ImageCard>
                  <img src="/images/waxing.jpg" alt="Beauty Service 3" />
                </ImageCard>
              </Grid>
              <Grid item xs={6}>
                <ImageCard>
                  <img src="/images/spa.jpg" alt="Beauty Service 4" />
                </ImageCard>
              </Grid>
            </Grid>
          </ImageGrid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
