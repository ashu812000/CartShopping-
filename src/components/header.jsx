import {Box, Button} from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
// import "./style.css"

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box className="header">
            <Box className="company-name" onClick={() => navigate("/home")}> Shopping Cart</Box>
            <Box className="cart-icon">
                <Box className="order-history" onClick={() => navigate("/orderHistory")}>Order History</Box>
                <ShoppingCartIcon sx={{cursor: "pointer"}} size={24} onClick={() => navigate("/cart")}/>
                <Button variant={"contained"}
                        color={"error"}
                        onClick={() => {
                            localStorage.removeItem('email')
                            navigate("/")
                        }
                        }>Logout <LogoutIcon
                    sx={{paddingLeft: "5px"}}/></Button>
            </Box>
        </Box>
    );
};

export default Header;
