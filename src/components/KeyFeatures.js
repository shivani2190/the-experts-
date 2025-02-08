import React from 'react';
import { Container, Typography, Grid, Box, IconButton, styled } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: '80px 0',
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
  }
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(139, 115, 85, 0.1)',
  border: '1px solid rgba(139, 115, 85, 0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 48px rgba(139, 115, 85, 0.15)',
  }
}));

const IconWrapper = styled(IconButton)(({ theme }) => ({
  background: 'linear-gradient(45deg, #8B7355 30%, #D4C4A8 90%)',
  width: '64px',
  height: '64px',
  marginBottom: theme.spacing(2),
  '&:hover': {
    background: 'linear-gradient(45deg, #6B5B45 30%, #8B7355 90%)',
  }
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  color: '#6B5B45',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: '#8B7355',
  marginBottom: theme.spacing(2),
}));

const KnowMoreButton = styled(Typography)(({ theme }) => ({
  color: '#8B7355',
  cursor: 'pointer',
  fontWeight: 500,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#6B5B45',
  }
}));

const KeyFeatures = () => {
  const features = [
    {
      icon: <SecurityIcon sx={{ color: '#F5F5DC', fontSize: '2rem' }} />,
      title: 'Safety Assured',
      description: 'Your Safety is utmost important for us. For delivering safe and hygiene services all our experts comes in PPE kit'
    },
    {
      icon: <AccessTimeIcon sx={{ color: '#F5F5DC', fontSize: '2rem' }} />,
      title: 'On time & Trained Expert',
      description: 'All our service providers are background verified and all service provider goes through a high bar of skill assessment'
    },
    {
      icon: <WorkspacePremiumIcon sx={{ color: '#F5F5DC', fontSize: '2rem' }} />,
      title: 'Single Kit & Branded Product',
      description: 'All our experts use only Branded and genuine sealed products & single time use Sachet packets.'
    }
  ];

  return (
    <FeatureSection>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 1,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #8B7355 30%, #D4C4A8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Key Features
        </Typography>
        
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: '#8B7355'
          }}
        >
          Delivering Safe & Hygiene Quality salon Services
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <Box sx={{ textAlign: 'center' }}>
                  <IconWrapper>
                    {feature.icon}
                  </IconWrapper>
                  <FeatureTitle variant="h5">
                    {feature.title}
                  </FeatureTitle>
                  <FeatureDescription>
                    {feature.description}
                  </FeatureDescription>
                  <KnowMoreButton>
                    Know More
                  </KnowMoreButton>
                </Box>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FeatureSection>
  );
};

export default KeyFeatures;
