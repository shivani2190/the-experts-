import React from 'react';
import {
  Container,
  Typography,
  Box,
  styled,
  keyframes,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.08) rotate(3deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const StepContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  padding: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  '&:not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    left: '25px',
    top: '60px',
    bottom: '-10px',
    width: '2px',
    background: 'linear-gradient(to bottom, #8B7355 0%, #D4C4A8 100%)',
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  background: 'linear-gradient(45deg, #8B7355 30%, #D4C4A8 90%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  flexShrink: 0,
  animation: `${float} 4s ease-in-out infinite`,
  boxShadow: '0 8px 16px rgba(139, 115, 85, 0.2)',
  position: 'relative',
  '&:hover': {
    animation: `${pulse} 1s ease-in-out infinite`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: '14px',
    padding: '2px',
    background: 'linear-gradient(45deg, #8B7355, #D4C4A8, #F5F5DC)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
    marginBottom: theme.spacing(1),
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderRadius: '12px',
  padding: theme.spacing(1.5),
  flex: 1,
  transition: 'all 0.3s ease',
  border: '1px solid rgba(139, 115, 85, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateX(5px)',
    boxShadow: '0 8px 20px rgba(139, 115, 85, 0.12)',
    background: 'rgba(255, 255, 255, 0.98)',
    '&::before': {
      transform: 'translateX(0)',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '2px',
    height: '100%',
    background: 'linear-gradient(to bottom, #8B7355, #D4C4A8)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
}));

const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const steps = [
    {
      icon: <StorefrontIcon sx={{ fontSize: '2.8rem', color: 'white' }} />,
      title: 'Choose Your Service',
      description: 'Browse through our wide range of premium beauty services and select the ones that match your needs.',
      subtitle: 'Select from various salon packages & services',
    },
    {
      icon: <EditIcon sx={{ fontSize: '2.8rem', color: 'white' }} />,
      title: 'Book Your Appointment',
      description: 'Pick your preferred time slot and fill in your details. Our booking process is quick and hassle-free.',
      subtitle: 'Choose your convenient time slot',
    },
    {
      icon: <HomeIcon sx={{ fontSize: '2.8rem', color: 'white' }} />,
      title: 'Expert Arrives',
      description: 'Our verified beauty expert will arrive at your doorstep with all necessary equipment and products.',
      subtitle: 'Relax while we come to you',
    },
    {
      icon: <SpaIcon sx={{ fontSize: '2.8rem', color: 'white' }} />,
      title: 'Enjoy the Service',
      description: 'Experience professional beauty services in the comfort of your home. Payment is processed after service completion.',
      subtitle: 'Get pampered and feel beautiful',
    },
  ];

  return (
    <Box sx={{ 
      py: 3,
      background: 'linear-gradient(135deg, #F5F5DC 0%, rgba(255,255,255,0.9) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #5C4D3A, #8B7355)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 8px rgba(139, 115, 85, 0.2)',
          }}
        >
          How it Works?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          align="center"
          sx={{
            mb: 3,
            color: '#8B7355',
            maxWidth: '500px',
            mx: 'auto',
          }}
        >
          Enjoy your required services in 4 simple steps!
        </Typography>
        <Box sx={{ position: 'relative' }}>
          {steps.map((step, index) => (
            <StepContainer key={index}>
              <IconBox>
                {React.cloneElement(step.icon, { sx: { fontSize: '1.5rem', color: 'white' } })}
              </IconBox>
              <ContentBox>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  sx={{
                    mb: 0.5,
                    color: '#5C4D3A',
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#8B7355',
                    fontStyle: 'italic',
                    mb: 1,
                  }}
                >
                  {step.subtitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#8B7355',
                  }}
                >
                  {step.description}
                </Typography>
              </ContentBox>
            </StepContainer>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
