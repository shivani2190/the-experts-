import React from 'react';
import { Box, Container, Typography, Card, CardMedia, Button, List, ListItem, ListItemIcon, ListItemText, styled, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
  background: '#fff',
  boxShadow: '0 4px 6px rgba(139, 115, 85, 0.15)',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    boxShadow: '0 8px 12px rgba(139, 115, 85, 0.2)',
    transform: 'translateY(-5px)',
    transition: 'all 0.3s ease',
  },
}));

const PackageImage = styled(Box)({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // 16:9 aspect ratio for shorter height
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 218, 185, 0.4)', // Peach color overlay
    zIndex: 1,
    mixBlendMode: 'soft-light',
  },
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.8',
    filter: 'saturate(0.7)',  // Increased fading by reducing saturation more
  },
});

const PackageContent = styled(Box)({
  padding: '16px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const PackageTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 700,
  marginBottom: '12px',
  color: '#5C4D3A',
});

const ServiceList = styled(List)({
  padding: 0,
  marginBottom: '12px',
});

const ServiceItem = styled(ListItem)({
  padding: '2px 0',
  '& .MuiListItemIcon-root': {
    minWidth: '20px',
    marginRight: '8px',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '6px',
    color: '#8B7355',
  },
  '& .MuiListItemText-primary': {
    fontSize: '13px',
    color: '#8B7355',
    '& span': {
      fontWeight: 600,
    },
  },
});

const ViewMoreButton = styled(Button)({
  color: '#8B7355',
  padding: '0',
  fontSize: '14px',
  textTransform: 'none',
  '&:hover': {
    background: 'none',
    color: '#5C4D3A',
  },
});

const Duration = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#8B7355',
  fontSize: '13px',
  marginBottom: '12px',
  '& .MuiSvgIcon-root': {
    fontSize: '14px',
    marginRight: '4px',
    color: '#8B7355',
  },
});

const PriceSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'auto',
  borderTop: '1px solid #D4C4A8',
  paddingTop: '12px',
});

const Price = styled(Box)({
  '& .original-price': {
    color: '#A89078',
    textDecoration: 'line-through',
    fontSize: '12px',
    marginBottom: '2px',
  },
  '& .current-price': {
    color: '#5C4D3A',
    fontSize: '16px',
    fontWeight: 700,
  },
  '& .savings': {
    color: '#8B7355',
    fontSize: '12px',
  },
});

const AddButton = styled(Button)({
  minWidth: 'unset',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  padding: 0,
  background: '#8B7355',
  color: 'white',
  '&:hover': {
    background: '#5C4D3A',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
  },
});

const DiscountBadge = styled(Box)(({ discount }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px',
  background: '#8B7355',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 600,
  zIndex: 1,
}));

const RecommendedPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Sit, Back & Relax',
      image: 'assets/packages/a1.jfif',
      services: [
        { name: 'Threading', details: 'Eyebrows & Upperlips Threading' },
        { name: 'Waxing', details: 'Full Arms Honey' },
        { name: 'Waxing', details: 'Half Legs Honey' },
        { name: 'FREE', details: 'Head(10min) Massage' },
      ],
      duration: '100 min(Approx)',
      originalPrice: 1813,
      currentPrice: 907,
      discount: 50,
      totalServices: 6,
    },
    {
      id: 2,
      title: 'Express Yourself',
      image: 'assets/packages/a2.jpg',
      services: [
        { name: 'Threading', details: 'Eyebrows & Upperlips Threading' },
        { name: 'Bleach', details: 'Face Bleach' },
        { name: 'Waxing', details: 'Full Arms Honey' },
        { name: 'Waxing', details: 'Full Legs Honey' },
      ],
      duration: '170 min(Approx)',
      originalPrice: 3011,
      currentPrice: 1887,
      discount: 45,
      totalServices: 8,
    },
    {
      id: 3,
      title: 'Super Saving Deals',
      image: 'assets/packages/a3.jpg',
      services: [
        { name: 'Waxing', details: 'Bikni Honey' },
        { name: 'Waxing', details: 'Full Arms Rica' },
        { name: 'Waxing', details: 'Half Legs Rica' },
        { name: 'Pedicure', details: 'Pedicure Basic' },
      ],
      duration: '145 min(Approx)',
      originalPrice: 3645,
      currentPrice: 1757,
      discount: 52,
      totalServices: 6,
    },
    {
      id: 4,
      title: 'Wax It!',
      image: 'assets/packages/a4.jpg',
      services: [
        { name: 'Threading', details: 'Eyebrows Threading' },
        { name: 'Bleach', details: 'Face Bleach' },
        { name: 'Waxing', details: 'Full Arms Honey' },
        { name: 'Waxing', details: 'Full Legs Honey' },
      ],
      duration: '60 min(Approx)',
      originalPrice: 1128,
      currentPrice: 555,
      discount: 51,
      totalServices: 6,
    },
  ];

  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(135deg, #F5F5DC 0%, #fff 100%)',
    }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #5C4D3A 30%, #8B7355 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Most Recommended Packages
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            mb: 6,
            color: '#8B7355',
          }}
        >
          Choose from our most popular beauty packages
        </Typography>

        <Grid container spacing={3}>
          {packages.map((pkg) => (
            <Grid item xs={12} sm={6} md={3} key={pkg.id}>
              <StyledCard>
                <DiscountBadge>
                  {pkg.discount}% OFF
                </DiscountBadge>
                <PackageImage>
                  <img src={pkg.image} alt={pkg.title} />
                </PackageImage>
                <PackageContent>
                  <PackageTitle variant="h6">
                    {pkg.title}
                  </PackageTitle>
                  <ServiceList>
                    {pkg.services.slice(0, 4).map((service, index) => (
                      <ServiceItem key={index}>
                        <ListItemIcon>
                          <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <>
                              <span>{service.name}</span> {service.details}
                            </>
                          }
                        />
                      </ServiceItem>
                    ))}
                  </ServiceList>
                  {pkg.totalServices > 4 && (
                    <ViewMoreButton>
                      View {pkg.totalServices - 4} More
                    </ViewMoreButton>
                  )}
                  <Duration>
                    <AccessTimeIcon />
                    {pkg.duration}
                  </Duration>
                  <PriceSection>
                    <Price>
                      <div className="original-price">₹{pkg.originalPrice}</div>
                      <div className="current-price">Cost: ₹{pkg.currentPrice}</div>
                      <div className="savings">Save ₹{pkg.originalPrice - pkg.currentPrice}</div>
                    </Price>
                    <AddButton>
                      <AddIcon />
                    </AddButton>
                  </PriceSection>
                </PackageContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecommendedPackages;
