import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';

const Testimonial = (props) => {
    const {description, img, name, country} = props.testimonial;  
    return (
        <>
        <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={3} sx={{py: 6, px: 5, mx: 1, mb: 10, textAlign: 'center'}}> 

            <Typography  variant="body2" sx={{ color: 'gray', mt: 2, fontSize: "16px", lineHeight: "26px", textAlign: "justify"}}> 
                    {description}
            </Typography>
            <Typography sx={{mt: 4}}>
            <img style={{width: '15%', height: '15%'}} src={img} alt="" />
            </Typography>
            <Typography variant="h6" component="div" sx={{color: '#5FC7C7'}} >
                {name}  
            </Typography>
            <Typography  variant="body2" sx={{ color: 'gray', mt: 1, fontSize: 16}}>
                    {country} 
            </Typography>
                
         </Paper>
        </Grid>
        </>
    );
};

export default Testimonial;