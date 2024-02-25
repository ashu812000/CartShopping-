import {Box, Button, Card, CardContent, Container, Grid, IconButton, Typography} from "@mui/material";
import {successToast} from "../utils/constant";
import {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {id: 1, name: 'Product 1', quantity: 1},
        {id: 2, name: 'Product 2', quantity: 1},
        {id: 3, name: 'Product 3', quantity: 1},
    ]);

    const handleQuantityChange = (id, quantity) => {
        const newCartItems = cartItems.map((item) =>
            item.id === id ? {...item, quantity} : item
        );
        setCartItems(newCartItems);
    };

    const handleRemoveItem = (id) => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems);
    };
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
            <Container>
                <Typography variant="h4" gutterBottom>
                    Shopping Cart
                </Typography>
                {cartItems.map((item) => (
                    <Card key={item.id} className={"card"}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={3}>
                                    <Typography>{item.name}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton
                                        onClick={() =>
                                            handleQuantityChange(
                                                item.id,
                                                Math.max(item.quantity - 1, 1)
                                            )
                                        }
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    {item.quantity}
                                    <IconButton
                                        onClick={() =>
                                            handleQuantityChange(item.id, item.quantity + 1)
                                        }
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>${item.quantity * 10}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
            </Container>
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
