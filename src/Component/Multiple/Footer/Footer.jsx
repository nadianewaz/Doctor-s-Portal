import { Box, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <h2>hello</h2>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <h2>hello</h2>
         </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <h2>hello</h2>
         </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <h2>hello</h2>
         </Grid>
        
      </Grid>
    </Box> 
            
        </>
    );
};

export default Footer;