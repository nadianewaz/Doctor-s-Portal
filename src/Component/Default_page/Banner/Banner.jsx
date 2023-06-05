import React from 'react'
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';

const Banner = () => {
  return (
    <>
     <Container sx={{ flexGrow: 1 ,backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={{mt: 15 }}>
            <Typography variant='h3' sx={{textTransform: "capitalize", fontWeight: '600', mb: 4}}>
              your new smile
              <br /> 
              starts here
            </Typography>
            <Typography variant='h6' sx={{fontWeight: '300', color: 'gray', fontSize: 16,  mb: 4, lineHeight: '30px'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis sit corporis quidem dicta quae itaque voluptatum fugit debitis nihil.
            </Typography>
            <Button variant='contained' sx={{ backgroundColor: '#18D3B6', mt: 1, textTransform: 'uppercase', p: '10px 35px'}} >get appointment </Button>
          
        </Grid>
        <Grid item xs={12} md={7} sx={{mt: 15}}>
          <img src={chair} alt="" style={{
            width: 650,
            height: '400px'
          }}/>
        </Grid>
        
      </Grid>
    </Container>
    
    </>
  )
}

export default Banner