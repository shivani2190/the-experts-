import React from 'react';
import { Container, Typography, Box, Grid, styled } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const BrandsSection = styled(Box)(({ theme }) => ({
  padding: '60px 0',
  background: 'linear-gradient(135deg, #F5F5DC 0%, #D4C4A8 100%)',
  position: 'relative',
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
  [theme.breakpoints.down('sm')]: {
    padding: '40px 0',
  }
}));

const BrandCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(139, 115, 85, 0.1)',
  border: '1px solid rgba(139, 115, 85, 0.1)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '120px',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 48px rgba(139, 115, 85, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '100px',
    padding: theme.spacing(2),
  }
}));

const BrandImage = styled('img')(({ theme }) => ({
  maxWidth: '80%',
  maxHeight: '80%',
  objectFit: 'contain',
  filter: 'grayscale(100%)',
  opacity: 0.7,
  transition: 'all 0.3s ease',
  '&:hover': {
    filter: 'grayscale(0%)',
    opacity: 1,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
    maxHeight: '90%',
  }
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem !important',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.75rem !important',
  }
}));

const Brands = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const brands = [
    { name: 'L\'Oreal', image: '/assets/brands/loreal.png' },
    { name: 'MAC', image: '/assets/brands/casmara.png' },
    { name: 'Oxy', image: '/assets/brands/oxy.jpeg' },
    { name: 'Lakme', image: '/assets/brands/professional.jpg' },
    { name: 'Revlon', image: '/assets/brands/raga.png' },
    { name: 'Matrix', image: '/assets/brands/rica.webp' },
  ];

  return (
    <BrandsSection>
      <Container maxWidth="lg">
        <ResponsiveTypography
          variant="h3"
          align="center"
          sx={{
            mb: isMobile ? 0.5 : 1,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #8B7355 30%, #D4C4A8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Brands We Trust
        </ResponsiveTypography>
        
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: isMobile ? 4 : 6,
            color: '#8B7355',
            fontSize: isMobile ? '1rem' : undefined,
          }}
        >
          We use only premium quality products from trusted brands
        </Typography>

        <Grid container spacing={isMobile ? 2 : 4}>
          {brands.map((brand, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <BrandCard>
                <BrandImage
                  src={brand.image}
                  alt={brand.name}
                />
              </BrandCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BrandsSection>
  );
};

export default Brands;
