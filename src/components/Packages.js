import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  styled,
  keyframes,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const shine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const PackageCard = styled(Card)(({ theme, featured }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  position: 'relative',
  overflow: 'hidden',
  background: featured 
    ? 'linear-gradient(-45deg, #8B7355, #A89078, #8B7355)'
    : 'linear-gradient(135deg, #A89078 0%, #8B7355 100%)',
  backgroundSize: '200% 200%',
  animation: featured ? `${shine} 15s ease infinite` : 'none',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  },
}));

const FeaturedBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '-30px',
  transform: 'rotate(45deg)',
  background: '#5C4D3A',
  color: '#F5F5DC',
  padding: '5px 40px',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  zIndex: 1,
}));

const PriceText = styled(Typography)(({ theme, featured }) => ({
  color: '#F5F5DC',
  fontWeight: 'bold',
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const SaveText = styled(Typography)(({ theme, featured }) => ({
  color: '#F5F5DC',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '1.1rem',
}));

const BookButton = styled(Button)(({ theme, featured }) => ({
  background: featured 
    ? '#F5F5DC'
    : 'linear-gradient(45deg, #5C4D3A 30%, #8B7355 90%)',
  color: featured ? '#5C4D3A' : '#F5F5DC',
  borderRadius: '25px',
  padding: '12px 35px',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 10px rgba(92, 77, 58, 0.3)',
  },
}));

const Packages = () => {
  const packages = [
    {
      title: 'Essential Beauty',
      services: [
        'Basic Facial Treatment',
        'Classic Manicure',
        'Threading (Eyebrows & Upper Lip)',
        'Basic Hair Styling',
      ],
      price: '₹1,499',
      originalPrice: '₹2,499',
      save: '₹1,000',
      featured: false,
    },
    {
      title: 'Premium Glow Package',
      services: [
        'Advanced Facial with Gold Mask',
        'Spa Manicure & Pedicure',
        'Full Body Waxing',
        'Hair Spa Treatment',
        'Party Makeup with Lashes',
      ],
      price: '₹3,999',
      originalPrice: '₹6,999',
      save: '₹3,000',
      featured: true,
    },
    {
      title: 'Bridal Bliss',
      services: [
        'Complete Bridal Makeup',
        'Pre-Bridal Services',
        'Hair Styling & Treatment',
        'Nail Art',
        'Mehendi Application',
      ],
      price: '₹15,999',
      originalPrice: '₹25,999',
      save: '₹10,000',
      featured: false,
    },
  ];

  return (
    <Box sx={{ 
      py: 10,
      background: 'linear-gradient(135deg, #F5F5DC 0%, #fff 100%)',
    }}>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ 
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #5C4D3A 30%, #8B7355 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Exclusive Packages
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          Choose the perfect package for your beauty needs
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {packages.map((pkg, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PackageCard featured={pkg.featured} elevation={pkg.featured ? 10 : 2}>
                {pkg.featured && <FeaturedBadge>BEST VALUE</FeaturedBadge>}
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    align="center"
                    sx={{ 
                      mb: 3,
                      fontWeight: 600,
                      color: '#F5F5DC'
                    }}
                  >
                    {pkg.title}
                  </Typography>

                  <PriceText featured={pkg.featured}>
                    {pkg.price}
                  </PriceText>

                  <Typography
                    align="center"
                    sx={{
                      textDecoration: 'line-through',
                      color: pkg.featured ? 'rgba(245, 245, 220, 0.7)' : 'rgba(245, 245, 220, 0.7)',
                      mb: 2,
                    }}
                  >
                    {pkg.originalPrice}
                  </Typography>

                  <SaveText featured={pkg.featured}>
                    Save {pkg.save}
                  </SaveText>

                  <List sx={{ mb: 2 }}>
                    {pkg.services.map((service, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: '#F5F5DC' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={service} 
                          sx={{ 
                            '& .MuiListItemText-primary': { 
                              color: '#F5F5DC',
                            } 
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 4, pt: 0 }}>
                  <BookButton
                    fullWidth
                    featured={pkg.featured}
                    variant="contained"
                    size="large"
                    startIcon={<LocalOfferIcon />}
                  >
                    Book Now
                  </BookButton>
                </CardActions>
              </PackageCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Packages;
