import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import appointmentbg from '../../../images/appointment-bg.png'; 

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
    // };
    // const style = {
    //   position: 'relative',
    //   width: '100%',
    //   "&:before": {
    //     position: "absolute",
    //     content: " ",
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     width: "100%",
    //     background: "red",
    //     opacity : "0.08"
    //   }

    // };
  

const ContactUs = () => {
    const handleForm = (event) => {
        alert('submitting');
        event.preventDefault();
      }
    return (
        <>
        
        <Box sx={{  mb: 5, textAlign: "center", backgroundImage: `url(${appointmentbg})`}}> 
        <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase',textAlign: "center", fontWeight: '800', color: '#5FC7C7', mb: '10px', mt: 5, ml: 5, pt: 8}}>
              contact us  
        </Typography>
        <Typography variant="h4" component="div" sx={{ textTransform: 'capitalize',textAlign: "center", fontWeight: '600', mb: '70px', ml: 5}}>
           always connect with us   
        </Typography>

         
            <form onSubmit={handleForm}>  
         
            <TextField
            sx={{ width: '72%', mt: 1 ,
            "& .MuiInputBase-root": {
              height: 75
            },
            backgroundColor: "#fff" 
            
          }}
            label=""
            id="outlined-size-small"
            defaultValue="Email Address*"  
            size="small"
          />  
            <TextField
            sx={{ width: '72%', mt: 3,
            "& .MuiInputBase-root": {
              height: 75
            } ,
            backgroundColor: "#fff"         
          }} 
            label=""
            id="outlined-size-small"
            defaultValue="Subject*" 
            size="small"
          />  
            <TextField
            sx={{ width: '72%', mt: 3,
            "& .MuiInputBase-root": {
              height: 200
            },
            backgroundColor: "#fff"
          }}
            label=""
            id="outlined-size-small"
            defaultValue="Your Message*" 
            size="small"
          />  
           
      <Typography sx={{pb: 12}}>
      <Button type='submit' sx={{ textTransform: "uppercase", mt: 3, backgroundColor: '#18D3B6', p: "8px 65px"}} variant="contained"> submit </Button>
      </Typography>


          </form>
          
          
          
          </Box>
        </>
    );
};

export default ContactUs;