import {Box, Button, Card, CardContent, Container, Grid, IconButton, Typography} from "@mui/material";
import {successToast} from "../utils/constant";
import {useContext, useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {addData, findWhere, updateProduct} from "../utils/firebase";
import {LoaderContext} from "../utils/Context";


export const Cart = () => {
    const [cartData, setCartData] = useState([])
    let {setShowLoader} = useContext(LoaderContext);
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        getCartData().then((res) => {

        })
    }, []);

    const getCartData = async () => {
        let response = await findWhere("cart", "id", "==", localStorage.getItem("email"))
        let amount = 0
        response.map(item => {
            amount = amount + item.price * item.quantity
        });
        setTotalAmount(amount)
        setCartData(response)
    }

    const handleRemoveItem = (data) => {
        setShowLoader(true)
        updateProduct("cart", data, "delete").then()
        getCartData().then()
        setShowLoader(false)
    };

    const handleQuantityChange = async (id, newQuantity) => {
        setShowLoader(true)
        let data
        let amount = 0
        const updatedCartItems = cartData.map(item => {
            if (item.productId === id) {
                data = {...item, quantity: newQuantity}
                amount = amount + item.price * newQuantity
                return {...item, quantity: newQuantity};
            } else {
                amount = amount + item.price * item.quantity
            }
            return item;
        });
        setTotalAmount(amount)
        await updateProduct("cart", data)
        setCartData(updatedCartItems);
        setShowLoader(false)
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
                {cartData.map((item, index) => (
                    <Card key={Math.random()} className={"card"}>
                        <CardContent>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item xs={1}>
                                    <img src={item.image} alt="logo" width={80} height={80}
                                           />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>{item.title}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton
                                        onClick={() =>
                                            handleQuantityChange(item.productId, Math.max(item.quantity - 1, 1))
                                        }
                                    >
                                        <RemoveIcon/>
                                    </IconButton>
                                    {item.quantity}
                                    <IconButton
                                        onClick={() =>
                                            handleQuantityChange(item.productId, Math.max(item.quantity + 1, 1))
                                        }
                                    >
                                        <AddIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>₹ {item.quantity * item.price}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        startIcon={<DeleteIcon/>}
                                        onClick={() => handleRemoveItem(item)}
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
                bottom: 33,
                height: "50px",
                margin: "10px 0 10px 0",
                backgroundColor: "#d4cece"
            }}>
                <Typography sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "50%"
                }}>
                    TOTAL AMOUNT = ₹ {totalAmount}
                </Typography>
                <Button variant={"contained"} color="success" sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "50%"
                }} onClick={() => {
                    successToast("Order Placed Successfully")
                    let data = {
                        email: localStorage.getItem("email"), items: cartData
                    }
                    addData("orders", data).then()
                }}>
                    CREATE ORDER
                </Button>
            </Box>
        </Box>
    )
}
