import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={require('../assets/whiteShirt.jpeg')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Low Tier
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Low Tier provides 4 pieces of fresh, quality clothing customized to your preferences at a low cost of 10$. 
          Our algorithm uses the your preferences described in a survey to provide you the best clothing possible. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Select</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
