import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import footerBg from '../../../images/footer-bg.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
      <Box sx={{ flexGrow: 1 , backgroundImage: `url(${footerBg})`, mt: 15}}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
        <Typography  variant="body2" sx={{ color: 'gray', mt: 9, fontSize: "16px", lineHeight: "26px", textAlign: "justify", textTransform: "capitalize", ml: 4, }}>  
                   <p> emergency dental care</p>  
                   <p> checkup</p> 
                   <p> treatment of personal diseases</p> 
                   <p> tooth extraction </p> 
                   <p> checkup</p> 

            </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign: "left", mt: 2, textTransform: "capitalize", color: '#5FC7C7'}} >  
               services
            </Typography>
            <Typography  variant="body2" sx={{ color: 'gray', mt: 2, fontSize: "16px", lineHeight: "26px", textAlign: "justify", textTransform: "capitalize"}}>  
                   <p> emergency dental care</p>  
                   <p> checkup</p> 
                   <p> treatment of personal diseases</p> 
                   <p> tooth extraction </p> 
                   <p> checkup</p> 
                   <p> checkup</p> 
                   <p> checkup</p> 

            </Typography>
         </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign: "left", mt: 2, textTransform: "capitalize", color: '#5FC7C7'}} >  
               oral health 
            </Typography>
            <Typography  variant="body2" sx={{ color: 'gray', mt: 2, fontSize: "16px", lineHeight: "26px", textAlign: "justify", textTransform: "capitalize"}}>  
                   <p> emergency dental care</p>  
                   <p> checkup</p> 
                   <p> treatment of personal diseases</p> 
                   <p> tooth extraction </p> 
                   <p> checkup</p> 
                   <p> checkup</p> 
                   <p> checkup</p> 

            </Typography>
       
         </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign: "left", mt: 2, textTransform: "capitalize", color: '#5FC7C7'}} >  
               our address 
            </Typography>
            <Typography  variant="body2" sx={{ color: 'gray', mt: 2, fontSize: "16px", lineHeight: "26px", textAlign: "justify", textTransform: "capitalize"}}>  
                  new york - 101010 hudson yards  
              </Typography>

              <Typography sx={{color: '#5FC7C7' , my: 5}}> 
                    <FacebookIcon></FacebookIcon>
                    <GoogleIcon sx={{mx: 2}}></GoogleIcon>
                    <TwitterIcon></TwitterIcon>
                </Typography>

              <Typography sx={{textTransform: "capitalize", color: 'gray', mt: 19}}>
                       call now 
              </Typography>
              <Typography sx={{pb: 12}}> 
      <Button type='submit' sx={{ textTransform: "uppercase", mt: 1, backgroundColor: '#18D3B6', p: "14px 20px", borderRadius: "5px",}} variant="contained"> +2025550295 </Button>
      </Typography>  
      </Grid>
        
      </Grid>

      <Typography sx={{textTransform: "capitalize", color: 'gray', textAlign: "center", mb: 3}}>copyright 2020 all rights reserved </Typography>
    </Box> 
            
        </>
    );
};

export default Footer;