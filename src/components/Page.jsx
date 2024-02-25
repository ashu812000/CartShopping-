import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { addProduct } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Page({products}) {
    console.log(localStorage.getItem("email"))
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "10", padding: 1 }}>
        <ToastContainer 
        />
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={products.imageUrl}
        />
        <CardContent>
          <Box sx={{display:"flex", justifyContent:"space-between"}}>
          <Typography gutterBottom variant="h5" component="div">
            {products.title}
          </Typography>
          <Typography sx={{fontSize:"15px", color:"gray"}} >Price : {products.price}</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {products.desc}
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
          <Button 
                onClick={()=>{
                   const data ={
                        productId: products.id,
                        id: localStorage.getItem("email"),
                        title: products.title,
                        desc: products.desc,
                        price: products.price,
                        image: products.imageUrl,
                        quantity: 1,
                    }
                    addProduct("cart", data).then(()=>{
                        toast.success("Item added to cart successfully")
                    
                    });
                }}
          size="small" variant="outlined" color="warning">Add To Cart</Button>
        </CardActions>
      </Card>

    </Box>
  )
}

