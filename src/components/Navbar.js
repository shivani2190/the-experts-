import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(245, 245, 220, 0.95)', // Light beige with transparency
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 12px rgba(139, 115, 85, 0.1)',
  color: theme.palette.primary.dark,
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: '1rem',
  textTransform: 'none',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: 'rgba(139, 115, 85, 0.08)',
  },
}));

const LogoImage = styled('img')({
  height: '40px',
  width: 'auto',
  marginRight: '10px',
});

const LogoLink = styled(Link)({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
  display: { xs: 'flex', md: 'none' },
  '&:hover': {
    backgroundColor: 'rgba(139, 115, 85, 0.08)',
  },
}));

const pages = ['Home', 'Services', 'About Us', 'Contact'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }}>
            <LogoLink to="/">
              <LogoImage src="/logo.png" alt="The Experts Logo" />
            </LogoLink>
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MenuIconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </MenuIconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              PaperProps={{
                sx: {
                  backgroundColor: 'rgba(245, 245, 220, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 12px rgba(139, 115, 85, 0.1)',
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    color: 'primary.dark',
                    '&:hover': {
                      backgroundColor: 'rgba(139, 115, 85, 0.08)',
                    }
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <LogoLink to="/">
              <LogoImage src="/assets/logo.png" alt="The Experts Logo" />
            </LogoLink>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <NavButton
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(' ', '-')}`}
              >
                {page}
              </NavButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
