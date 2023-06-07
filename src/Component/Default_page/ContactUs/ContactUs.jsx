import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const ContactUs = () => {
    const handleForm = (event) => {
        alert('submitting');
        event.preventDefault();
      }
    return (
        <>
        <Container sx={{mb: 5}}>

        
        <Box sx={{style}}> 
        <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase',textAlign: "center", fontWeight: '800', color: '#5FC7C7', mb: '10px', mt: 5, ml: 5}}>
              contact us  
        </Typography>
        <Typography variant="h4" component="div" sx={{ textTransform: 'capitalize',textAlign: "center", fontWeight: '600', mb: '90px', ml: 5}}>
           always contact with us   
        </Typography>

          <Typography> 
            <form onSubmit={handleForm}>  
         
            <TextField
            sx={{ width: '90%', mt: 1, color: 'gray'}}
            label=""
            id="outlined-size-small"
            defaultValue="Email Address*"  
            size="small"
          />  
            <TextField
            sx={{ width: '90%', mt: 1}} 
            label=""
            id="outlined-size-small"
            defaultValue="Subject*" 
            size="small"
          />  
            <TextField
            sx={{ width: '90%', mt: 1}}
            label=""
            id="outlined-size-small"
            defaultValue="Your Message*" 
            size="small"
          />  
           

<Button type='submit' sx={{ textTransform: "uppercase", mt: 2, backgroundColor: '#18D3B6', p: "8px 45px", ml: 0 , textAlign: "center" }} variant="contained"> submit </Button>

          </form>
          </Typography>
          
          
          </Box>
          </Container>
            
        </>
    );
};

export default ContactUs;