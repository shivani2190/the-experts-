import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  styled,
  keyframes,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  background: 'linear-gradient(135deg, #F5F5DC 0%, #D4C4A8 100%)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(139, 115, 85, 0.2)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '15px',
  }
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
  transition: 'transform 0.5s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    height: 200,
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'linear-gradient(45deg, #8B7355 30%, #D4C4A8 90%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '-30px auto 20px',
  animation: `${float} 3s ease-in-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px',
    margin: '-25px auto 15px',
  }
}));

const GlowButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #8B7355 30%, #D4C4A8 90%)',
  border: 0,
  borderRadius: '25px',
  boxShadow: '0 3px 5px 2px rgba(139, 115, 85, 0.3)',
  color: '#fff',
  padding: '10px 25px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 10px 4px rgba(139, 115, 85, 0.3)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 20px',
    fontSize: '0.875rem',
  }
}));

const ResponsiveTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem !important',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.75rem !important',
  }
}));

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      title: 'Luxury Makeover',
      image: '/images/luxury.jpg',
      description: 'Professional makeup services with premium products for any occasion',
      price: 'Starting from ₹999',
    },
    {
      title: 'Complete Hair Care',
      image: '/images/hair.jpg',
      description: 'Expert hair styling, coloring, and treatment services at your doorstep',
      price: 'Starting from ₹799',
    },
    {
      title: 'Spa & Wellness',
      image: '/images/spa.jpg',
      description: 'Rejuvenating spa treatments and massages in the comfort of your home',
      price: 'Starting from ₹1299',
    },
    {
      title: 'Bridal Services',
      image: '/images/bride.jpg',
      description: 'Complete bridal packages with trials and customization options',
      price: 'Starting from ₹15999',
    },
  ];

  return (
    <Box sx={{ 
      py: isMobile ? 4 : 8,
      background: 'linear-gradient(135deg, #F5F5DC 0%, #D4C4A8 100%)',
    }}>
      <Container maxWidth="lg">
        <ResponsiveTitle
          variant="h2"
          component="h2"
          align="center"
          sx={{ 
            mb: isMobile ? 1 : 2,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #8B7355 30%, #D4C4A8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Premium Services
        </ResponsiveTitle>

        <Typography
          variant="h5"
          align="center"
          sx={{ 
            mb: isMobile ? 4 : 8,
            color: '#6B5B45',
            fontSize: isMobile ? '1.125rem' : undefined,
          }}
        >
          Experience luxury beauty services in the comfort of your home
        </Typography>

        <Grid container spacing={isMobile ? 2 : 4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard elevation={0}>
                <StyledCardMedia
                  image={service.image}
                  title={service.title}
                />
                <IconWrapper>
                  <SpaIcon sx={{ 
                    color: '#F5F5DC', 
                    fontSize: isMobile ? '1.5rem' : '2rem' 
                  }} />
                </IconWrapper>
                <CardContent sx={{ 
                  flexGrow: 1, 
                  textAlign: 'center',
                  padding: isMobile ? '16px' : '24px'
                }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      color: '#6B5B45',
                      fontSize: isMobile ? '1.25rem' : undefined,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2,
                      color: '#8B7355',
                      fontSize: isMobile ? '0.875rem' : undefined,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: isMobile ? 2 : 3,
                      color: '#6B5B45',
                      fontWeight: 600,
                      fontSize: isMobile ? '1rem' : undefined,
                    }}
                  >
                    {service.price}
                  </Typography>
                  <GlowButton variant="contained">
                    Book Now
                  </GlowButton>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
