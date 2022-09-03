import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";

const cards = [{
    key: 1,
    title: 'Low Tier',
    description: 'The low tier provides quality clothing at an incredibly low cost of 10$.  Our algorithm takes into account your preferences based on the profile quiz submitted earlier.',
    imageLink: require('./../assets/lowTier.jpeg')
}, {
    key: 2,
    title: 'Middle Tier',
    description: 'The middle tier provides trendy quality clothing at an incredibly low cost of 15$. Our algorithm takes into account your preferences based on the profile quiz submitted earlier.',
    imageLink: require('./../assets/mediumTier.jpeg')
}, {
    key: 3,
    title: 'High Tier',
    description: 'The high tier provides the trendiest luxury clothing at an incredibly low cost of 30$.  Our algorithm takes into account your preferences based on the profile quiz submitted earlier.',
    imageLink: require('./../assets/highTier.jpeg')
}];

const theme = createTheme();


export default function Album() {
 const navigate = useNavigate()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>      
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4} style={{paddingRight: 10 }}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#000'}}
                >
                  <CardMedia
                    component="img"
                    image={card.imageLink}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                        {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                        <Button size="small" onClick={() => {
                            navigate("/boxSelection", {
                                state: { 
                                    option: card.title 
                                }
                            })
                        }}>Select</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}