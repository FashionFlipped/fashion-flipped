import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import StarIcon from '@mui/icons-material/StarBorder';

const cards = [{
    key: 1,
    title: 'Low Tier',
    description: [
        'Low Cost  \n',
        'Quality Material \n',
        'Will provide trendy clothing \n',
        'Customized to your needs \n',
      ],
    imageLink: require('./../assets/lowTier.jpeg'),
    buttonText: 'Select Option',
    buttonVariant: 'outlined',
    price: '10',
    subheader: 'The way to get trendy clothes for cheap',
    amount: '2'
}, {
    key: 2,
    title: 'Middle Tier',
    description: [
        'Medium Cost \n',
        'Quality Material \n',
        'Will provide trendy clothing \n',
        'Customized to your needs \n',
      ],
    imageLink: require('./../assets/mediumTier.jpeg'),
    buttonText: 'Reccomended Option',
    buttonVariant: 'contained',
    price: '15',
    subheader: 'The way to get the trendiest clothes for cheap',
    amount: '4'
}, {
    key: 3,
    title: 'High Tier',
    description: [
        'High Cost \n',
        'Quality Material \n',
        'Will provide trendy clothing \n',
        'Customized to your needs \n',
      ],
    imageLink: require('./../assets/highTier.jpeg'),
    buttonText: 'Select Option',
    buttonVariant: 'outlined',
    price: '30',
    subheader: 'The way to get luxury clothes for cheap',
    amount: '8'
}];

const theme = createTheme();


export default function Subscriptions() {
 const navigate = useNavigate()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h2>
        Find your subscription
      </h2>
      <main>      
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
             <Grid
             item
             key={card.title}
             xs={12}
             sm={card.title === 'Middle Tier' ? 12 : 6}
             md={4}
           >
             <Card>
               <CardHeader
                 title={card.title}
                 subheader={card.subheader}
                 titleTypographyProps={{ align: 'center' }}
                 action={card.title === 'Pro' ? <StarIcon /> : null}
                 subheaderTypographyProps={{
                   align: 'center',
                 }}
                 sx={{
                   backgroundColor: (theme) =>
                     theme.palette.mode === 'light'
                       ? theme.palette.grey[200]
                       : theme.palette.grey[700],
                 }}
               />
               <CardMedia
                    component="img"
                    image={card.imageLink}
                  />

               <CardContent>
                 <Box
                   sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'baseline',
                     mb: 2,
                   }}
                 >
                   <Typography component="h2" variant="h3" color="text.primary">
                     ${card.price}
                   </Typography>
                   <Typography variant="h6" color="text.secondary">
                     /mo
                   </Typography>
                 </Box>
                 <ul>
                   {card.description.map((line) => (
                     <Typography
                       component="li"
                       variant="subtitle1"
                       align="center"
                       key={line}
                     >
                       {line}
                     </Typography>
                   ))}
                 </ul>
               </CardContent>
               <CardActions>
                 <Button fullWidth variant={card.buttonVariant} onClick={() => {
                     navigate("/boxSelection", {
                        state: { 
                            option: card.title,
                            amount: card.amount 
                        }
                    })
                 }}>
                   {card.buttonText}
                 </Button>
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

//<Button size="small" onClick={() => {
//     navigate("/boxSelection", {
//         state: { 
//             option: card.title 
//         }
//     })
// }}>Select</Button>

{/* <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#000'}}
                ></Card> */}