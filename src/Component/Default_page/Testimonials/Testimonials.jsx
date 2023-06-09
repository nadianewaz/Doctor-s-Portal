import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Testimonial from '../Testimonial/Testimonial';
import { Typography } from '@mui/material';

const testimonials = [
    {
      id: 1,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolor nihil aut, perferendis placeat saepe nesciunt corrupti molestiae. At, excepturi!',
      img: people1, 
      name: 'Winson Herry',
      country: 'california'
  
    },
    {
      id: 2,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolor nihil aut, perferendis placeat saepe nesciunt corrupti molestiae. At, excepturi!',
      img: people2 ,
      name: 'Winson Herry',
      country: 'california'
  
    },
    {
      id: 3,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolor nihil aut, perferendis placeat saepe nesciunt corrupti molestiae. At, excepturi!',
      img: people3 ,
      name: 'Winson Herry',
      country: 'california'
  
    }
    
  ];

const Testimonials = () => {
    return (
        <> 
        
        <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase', fontWeight: '800', color: '#5FC7C7', mb: '10px', mt: 15, ml: 5}}>
              testimonials 
        </Typography>
        <Typography variant="h4" component="div" sx={{ textTransform: 'capitalize', fontWeight: '600', mb: '90px', ml: 5}}>
           what's our patients says  
        </Typography>
        
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            testimonials.map( testimonial=> <Testimonial
            key={testimonial.id}
            testimonial={testimonial} 
            ></Testimonial> 
              
              )

          }
         
          </Grid>
      </Box>

        
      </>
    );
};

export default Testimonials;