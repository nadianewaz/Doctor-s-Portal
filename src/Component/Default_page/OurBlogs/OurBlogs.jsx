import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import OurBlog from '../OurBlog/OurBlog';





const ourBlogs = [
    {
      id: 1,
      img: people1, 
      name: 'Rashed Kabir',
      date: '22 Aug 2018',
      heading: 'Check at least a doctor in a year for your teeth',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolor nihil aut, perferendis placeat saepe nesciunt corrupti molestiae. At, excepturi!',
      
   },
    {
      id: 2,
      img: people2, 
      name: 'Dr. Caudi',
      date: '23 April 2019',
      heading: '2 times of brush in a day can keep you healthy',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolor nihil aut, perferendis placeat saepe nesciunt corrupti molestiae. At, excepturi!',
      
   },
    {
      id: 3,
      img: people3, 
      name: 'Dr. John Mithchel',
      date: '23 April 2019',
      heading: 'The tooth cancer is taking a challenge', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolor nihil aut, perferendis placeat saepe nesciunt corrupti molestiae. At, excepturi!',
      
   },
  
    
  ];

const OurBlogs = () => {
    return (
        <>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>  
       
       <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase', fontWeight: '800', color: '#5FC7C7', mb: '10px', mt: 15, ml: 5}}>
              our blog  
        </Typography>
        <Typography variant="h4" component="div" sx={{ textTransform: 'capitalize', fontWeight: '600', mb: '90px', ml: 5}}>
           from our blog news   
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
          {
            ourBlogs.map( ourblog=> <OurBlog
            key={ourblog.id}
            ourblog={ourblog}
            ></OurBlog>
              
              )

          }
         
          </Grid> 
          </Box>
          
          </>
    );
};

export default OurBlogs;