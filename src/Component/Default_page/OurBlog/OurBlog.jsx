import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const OurBlog = (props) => {
    const { img, name, date, heading, description} = props.ourblog;   
    return (
        <>
        <Grid item xs={2} sm={4} md={4}> 
            <Paper elevation={3} sx={{py: 6, px: 5, mx: 1, mb: 10, textAlign: 'center'}}> 


        <Grid container spacing={2}>
        <Grid item xs={3}>
        <Typography sx={{mt: 4}}>
            <img style={{width: '100%', height: '100%', marginTop: '-30px'}} src={img} alt="" />
            </Typography>
         
        </Grid>
        <Grid item xs={9}>
        <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign: "left"}} > 
                {name}  
        </Typography>
        <Typography  variant="body2" sx={{ color: 'gray', mt: 1, fontSize: 16,  textAlign: "left"}}> 
                    {date}  
        </Typography>
          
        </Grid>
      </Grid>
            
            
           

           <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign: "left", mt: 2}} > 
                {heading}   
            </Typography>
            <Typography  variant="body2" sx={{ color: 'gray', mt: 2, fontSize: "16px", lineHeight: "26px", textAlign: "justify"}}> 
                    {description}
            </Typography>
                
            </Paper>
        </Grid> 
        
        </>
    );
};

export default OurBlog; 