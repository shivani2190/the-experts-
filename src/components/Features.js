import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  styled,
  keyframes,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InventoryIcon from '@mui/icons-material/Inventory';
import StarIcon from '@mui/icons-material/Star';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const FeatureBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: '30px',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    '& .feature-icon': {
      animation: `${pulse} 1s ease-in-out infinite`,
    },
    '& .background-shape': {
      animation: `${rotate} 10s linear infinite`,
    },
  },
}));

const IconWrapper = styled(Box)(({ theme, color }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  position: 'relative',
  zIndex: 1,
}));

const BackgroundShape = styled(Box)(({ color }) => ({
  position: 'absolute',
  top: '-50px',
  right: '-50px',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${color}20 0%, ${color}05 100%)`,
  zIndex: 0,
}));

const Features = () => {
  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: '2.5rem' }} />,
      title: 'Safety Assured',
      description: 'Experience worry-free services with our verified experts who follow strict safety protocols and use PPE kits.',
      color: '#4CAF50',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: '2.5rem' }} />,
      title: 'Expert Care',
      description: 'Our highly skilled professionals are background verified and trained to deliver exceptional service quality.',
      color: '#2196F3',
    },
    {
      icon: <InventoryIcon sx={{ fontSize: '2.5rem' }} />,
      title: 'Premium Products',
      description: 'We use only branded, sealed products and single-use kits to ensure the highest standards of hygiene.',
      color: '#9C27B0',
    },
    {
      icon: <StarIcon sx={{ fontSize: '2.5rem' }} />,
      title: 'Satisfaction Guaranteed',
      description: 'Your satisfaction is our priority. Experience personalized care and attention to detail.',
      color: '#FF9800',
    },
  ];

  return (
    <Box sx={{ 
      py: 10,
      background: 'linear-gradient(135deg, #fff5f8 0%, #fff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ 
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #FF1493 30%, #FF69B4 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Why Choose Us
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          Experience the difference with our premium beauty services
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureBox>
                <BackgroundShape 
                  className="background-shape"
                  color={feature.color}
                />
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <IconWrapper 
                    className="feature-icon"
                    color={feature.color}
                  >
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </FeatureBox>
            </Grid>
          ))}
        </Grid>

        <Box 
          sx={{ 
            textAlign: 'center',
            mt: 10,
            pt: 8,
            borderTop: '2px solid #f0f0f0',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: '#333',
            }}
          >
            YOUR TIME | YOUR PLACE
          </Typography>
          <Typography
            variant="h2"
            component="div"
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #FF1493 30%, #FF69B4 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            YOUR BEAUTY
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
