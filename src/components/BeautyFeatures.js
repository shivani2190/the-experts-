import React from 'react';
import { Box, Container, Typography, styled, keyframes, useTheme, useMediaQuery } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg) scale(1); filter: brightness(1); }
  50% { transform: translateY(-12px) rotate(3deg) scale(1.05); filter: brightness(1.2); }
  100% { transform: translateY(0) rotate(0deg) scale(1); filter: brightness(1); }
`;

const shine = keyframes`
  0% { background-position: -200% center; opacity: 0.5; }
  50% { opacity: 1; }
  100% { background-position: 200% center; opacity: 0.5; }
`;

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139, 115, 85, 0.4); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(139, 115, 85, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139, 115, 85, 0); }
`;

const glowText = keyframes`
  0% { text-shadow: 0 0 10px rgba(139, 115, 85, 0.5), 0 0 20px rgba(139, 115, 85, 0.3); }
  50% { text-shadow: 0 0 20px rgba(139, 115, 85, 0.8), 0 0 30px rgba(139, 115, 85, 0.5); }
  100% { text-shadow: 0 0 10px rgba(139, 115, 85, 0.5), 0 0 20px rgba(139, 115, 85, 0.3); }
`;

const FeatureContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '30px',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(139, 115, 85, 0.3)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-15px) scale(1.03)',
    background: 'rgba(255, 255, 255, 0.98)',
    boxShadow: '0 25px 50px rgba(139, 115, 85, 0.2)',
    '&::before': {
      transform: 'translateY(0)',
      opacity: 1,
    },
    '& h3': {
      animation: `${glowText} 2s infinite`,
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: 'linear-gradient(90deg, #5C4D3A, #8B7355, #D4C4A8, #5C4D3A)',
    backgroundSize: '300% auto',
    animation: `${shine} 4s linear infinite`,
    transform: 'translateY(-100%)',
    opacity: 0,
    transition: 'all 0.4s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(139, 115, 85, 0.1) 0%, rgba(212, 196, 168, 0.1) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '100px',
  height: '100px',
  margin: '0 auto',
  borderRadius: '30px',
  background: 'linear-gradient(135deg, #8B7355 0%, #D4C4A8 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  position: 'relative',
  animation: `${float} 5s ease-in-out infinite`,
  '&:hover': {
    animation: `${pulse} 1.5s ease-in-out infinite`,
    '& svg': {
      transform: 'scale(1.2) rotate(10deg)',
      filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
    },
  },
  '& svg': {
    transition: 'all 0.4s ease',
    filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-4px',
    borderRadius: '34px',
    padding: '4px',
    background: 'linear-gradient(135deg, #5C4D3A, #8B7355, #D4C4A8)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    opacity: 0.9,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-8px',
    borderRadius: '38px',
    background: 'linear-gradient(135deg, rgba(139,115,85,0.2), rgba(212,196,168,0.2))',
    zIndex: -1,
    animation: `${shine} 3s linear infinite`,
    filter: 'blur(10px)',
  },
}));

const BeautyFeatures = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <AccountBalanceWalletOutlinedIcon sx={{ fontSize: '3rem', color: 'white' }} />,
      title: 'AFFORDABLE PRICES',
      description: 'Experience premium beauty services that don\'t break the bank. Quality meets affordability.',
    },
    {
      icon: <PersonOutlineOutlinedIcon sx={{ fontSize: '3rem', color: 'white' }} />,
      title: 'TRAINED & EXPERT BEAUTICIAN',
      description: 'Our certified professionals bring years of expertise to deliver exceptional service.',
    },
    {
      icon: <CleaningServicesOutlinedIcon sx={{ fontSize: '3rem', color: 'white' }} />,
      title: 'MESS-FREE HOME SERVICES',
      description: 'Enjoy professional beauty treatments in the comfort of your home, without any cleanup hassle.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #F5F5DC 0%, #fff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(139,115,85,0.15) 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at 70% 80%, rgba(212,196,168,0.15) 0%, rgba(255,255,255,0) 60%)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle at center, rgba(139,115,85,0.08) 0%, transparent 70%)',
          zIndex: 0,
          animation: `${shine} 15s linear infinite`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              color: '#5C4D3A',
              mb: 2,
              letterSpacing: '4px',
              [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
              },
              textTransform: 'uppercase',
              animation: `${glowText} 3s infinite`,
            }}
          >
            YOUR TIME | YOUR PLACE
          </Typography>
          <Typography
            variant="h2"
            component="h3"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #5C4D3A 30%, #8B7355 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
              },
            }}
          >
            YOUR BEAUTY
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <FeatureContainer key={index}>
              <IconWrapper>
                {feature.icon}
              </IconWrapper>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: '#5C4D3A',
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B7355',
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </Typography>
            </FeatureContainer>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BeautyFeatures;
