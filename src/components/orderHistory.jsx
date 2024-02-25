import { Box, Grid, Typography, Container, Card, CardContent, IconButton, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { findWhere } from "../utils/firebase";

export const OrderHistory = () => {
    const [cartItems, setCartItems] = useState([]);
    const [orderHistoryDetails, setOrderHistoryDetails] = useState([])

    useEffect(() => {
        const orderHistoryData = findWhere("orders", "email", "==", localStorage.getItem("email")).then((res) => {
            console.log(res)
            setCartItems(res)
        })
    }, [])

    useEffect(() => {
        setOrderHistoryDetails(cartItems);
    }, [cartItems])
    return (
        <>
            <Typography variant="h4">Order History</Typography>
            {
                orderHistoryDetails.map((orderDetails, index) => {
                    return orderDetails.items.map((orders, idx) => {
                        return (
                            <Box key={idx} sx={{ width: "80%" }}>
                                <Box
                                    sx={{
                                        maxWidth: "100%",
                                        margin: '20px auto',
                                        backgroundColor: '#fff',
                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                                        padding: 3,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        borderRadius: 4,
                                        gap: 2
                                    }}
                                >
                                    <img
                                        src={orders.image}
                                        alt="Product Image"
                                        style={{ maxWidth: '140px', height: '150px', marginBottom: '5px' }}
                                    />
                                    <Box sx={{ fontSize: 16, marginBottom: '15px',textAlign:"left",}}>
                                        <Typography variant="body1">
                                            <strong>Name:</strong> Chocolate
                                        </Typography>
                                        <Typography variant="body1">
                                            <strong>Quantity:</strong> {orders.quantity}
                                        </Typography>
                                        <Typography variant="body1">
                                            <strong>Price:</strong> {orders.price}
                                        </Typography>
                                        <Typography variant="body1">
                                            <strong>Total Price:</strong> ₹{orders.price}
                                        </Typography>
                                        <Typography variant="body1">
                                            <strong>ID:</strong> {orders.productId}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ fontSize: 18, color: '#d9534f', fontWeight: 'bold' }}>
                                        <Typography variant="body1">
                                            <strong>Total Price:</strong> ₹{orders.price}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                })
            }
        </>
    )
}
