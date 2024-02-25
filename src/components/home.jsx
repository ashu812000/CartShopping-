import {  Box, Grid } from "@mui/material";
import { productDetails} from "../utils/constant";
import Page from "./Page";

export const Home = () => {
    return (
        <>
        <Box sx={{padding:1}}>
            <Grid container spacing={1} sx={{
            minHeight:"100vh",
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // Three cards per row
            gap: '16px', // Adjust the gap between cards
            marginTop: '20px',
            gridColumn:"span1/span1"}}
            >
            
            {productDetails.map((item , index)=>(
                    <Page key={index}  products={item} />
            ))}
        
            
            </Grid>
            </Box>
        </>
    )
}
