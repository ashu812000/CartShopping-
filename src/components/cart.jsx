import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {successToast} from "../utils/constant";

export const Cart = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItem: "center",
            gap: "10",
            margin: "10px 0 10px 0"
        }}>
            <Card sx={{maxWidth: 345}}>
                {/*<CardMedia*/}
                {/*    component="img"*/}
                {/*    alt="green iguana"*/}
                {/*    height="140"*/}
                {/*    image={imageUrl}*/}
                {/*/>*/}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                    <Button size="small" variant="outlined" color="warning">Add To Cart</Button>
                    <Button size="small" variant="contained" color="primary">Buy Now</Button>
                </CardActions>
            </Card>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                width: "100%",
                gap: "10",
                position: "fixed",
                bottom: 35,
                height: "50px",
                margin: "10px 0 10px 0"
            }}>
                <Typography sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "50%"
                }}>
                    TOTAL AMOUNT
                </Typography>
                <Button variant={"contained"} sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "50%"
                }} onClick={() => successToast("Order Placed Successfully")}>
                    CREATE ORDER
                </Button>
            </Box>
        </Box>
    )
}
