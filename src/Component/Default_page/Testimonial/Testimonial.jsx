import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';

const Testimonial = (props) => {
    const {description, img, name, country} = props.testimonial;  
    return (
        <>
        <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={3} sx={{py: 5, px: 4, mx: 4, mb: 10, textAlign: 'center'}}> 

            <Typography variant="body2" sx={{ color: 'gray', mt: 2, fontSize: 16}}>
                    {description}
            </Typography>
            <Typography>
            <img style={{width: '15%', height: '15%'}} src={img} alt="" />
            </Typography>
            <Typography variant="h6" component="div" >
                {name}  
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray', mt: 1, fontSize: 16}}>
                    {country} 
            </Typography>
                
           






            </Paper>
        </Grid>
        </>
    );
};

export default Testimonial;