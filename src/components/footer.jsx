import {Box} from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    return (
        <Box className="footer">
            <Box className="company-name"> Shopping Cart</Box>
            <Box className="cart-icon">
                <FacebookIcon size={24} className="social-icon"/>
                <InstagramIcon size={24} className="social-icon"/>
                <TwitterIcon size={24} className="social-icon"/>
                <LinkedInIcon size={24} className="social-icon"/>
            </Box>
        </Box>
    );
};

export default Footer;
