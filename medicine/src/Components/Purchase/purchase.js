import React from 'react';
import './purchase.css';
import  { Typography,CardMedia,Card, CardContent, IconButton,CardActions } from '@material-ui/core';

function Purchase(){
    return(
        <>
<div className='Purchase'>
    <p className='pills'>Order Now</p>
    </div>
    <div className='Purchase'>
<Card className='productcard'>
    <CardMedia  className='cardimg' variant="top" style={{margin:'auto' ,height:'14rem' ,width:'14rem' }}
    image='https://ae01.alicdn.com/kf/H4cb839ca59774d6eaeeae3018d13c90dN/Hot-Sale-50-1000g-Increase-Sexual-Desire-Malaysia-Original-Tongkat-Ali-Extract-Powder-1pc-Viagra-For.jpg'/>
    <CardContent>
    <div>
        <Typography variant='h5' gutterbottom>Sirma Powder</Typography>
        <Typography variant='h6' gutterbottom>Ksh 400</Typography>
    </div>
    <Typography variant='body2' color='textSecondary'>
           Hot Sale 50-1000g Increase Sexual Desire,Original 
           <br />
           Extract Powder 1pc Viagra For Men Increase Sexual Desire.
    </Typography>
    </CardContent>
    <CardActions disableSpacing className='cardaction'>
        <IconButton aria-label='Add to Cart'>
        <i class="fas fa-cart-plus fa-2x" ></i>
        </IconButton>
    </CardActions>
</Card>
    </div>
</>
)

};
export default Purchase;