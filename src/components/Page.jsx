import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";

export default function Page({imageUrl}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "10", margin:"10px 0 10px 0" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
          <Button size="small" variant="outlined" color="warning">Add To Cart</Button>
          <Button size="small" variant="contained" color="primary">Buy Now</Button>
        </CardActions>
      </Card>

    </Box>
  )
}

