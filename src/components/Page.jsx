import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

export default function Page() {
    return (
        <> I'm page
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://m.media-amazon.com/images/I/715igBNcyEL._AC_UF1000,1000_QL80_.jpg"
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
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
             
        </>
    )
}

