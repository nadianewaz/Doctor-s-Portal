import React from 'react'


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Flouride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
  {
    name: 'Flouride Treatment',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut maxime accusamus. Nulla, porro tenetur!',
    img: Flouride

  },
  {
    name: 'Cavity Filling',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut maxime accusamus. Nulla, porro tenetur!',
    img: Cavity

  },
  {
    name: 'Teeth Whitening',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut maxime accusamus. Nulla, porro tenetur!',
    img: Whitening

  }
  
];

const Services = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ textAlign: 'center'}}>
      <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase', fontWeight: '800', color: '#5FC7C7', mb: '10px'}}>
            our services
      </Typography>
      <Typography variant="h6" component="div" sx={{ textTransform: 'capitalize', fontWeight: '600', mb: '90px'}}>
           services we provide
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          services.map( service=> <Service
          key={service.name}
          service={service}
          ></Service>
          )
        }
      </Grid>
      </Container>
    </Box>
    
    </>
  )
}

export default Services