import {Box} from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router-dom";
// import "./style.css"

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box className="header">
            <Box className="company-name" onClick={() => navigate("/home")}> Shopping Cart</Box>
            <Box className="cart-icon">
                <Box className="order-history" onClick={() => navigate("/orderHistory")}>Order History</Box>
                <ShoppingCartIcon sx={{cursor: "pointer"}} size={24} onClick={() => navigate("/cart")}/>
            </Box>
        </Box>
    );
};

export default Header;
