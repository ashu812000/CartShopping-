import { Box } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import "./style.css"

const Header = () => {
  return (
    <Box className="header">
      <Box className="company-name">Gift kart</Box>
      <Box className="cart-icon">
        <ShoppingCartIcon size={24} />
      </Box>
    </Box>
  );
};

export default Header;
