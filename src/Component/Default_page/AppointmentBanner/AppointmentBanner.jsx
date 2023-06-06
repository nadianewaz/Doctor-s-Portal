import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png';

// const appointmentBg = {
//     background: `url(${bg})`,
//     backgroundSize: 'cover'


// }

export default function AppointmentBanner() {
  return (
    <>
    <Box  sx={{ flexGrow: 1 , backgroundImage: `url(${bg})`, marginTop: '185px', backgroundColor: 'rgba(45, 58, 74, 0.9)', backgroundBlendMode: 'darken, luminosity'}}> 

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} >
          <img 
          style={{width: 600, marginTop: '-150px'}}
          src={doctor} alt=""/>
        </Grid>

        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'left'
        }}>
         <Box>

         <Typography variant='h6' sx={{ color: '#5FC7C7'}}>
            APPOINTMENT  
         </Typography>
         <Typography variant='h4' sx={{ color: '#fff', my: 3}}>
            Make An Appointment Today  
         </Typography>
         <Typography variant='h6' sx={{ color: '#fff', fontWeight: '300', mb: 5}}>
            It is a long established fact that a reader will be distractedby the readable content of a page when looking at its  
         </Typography>
         <Button variant='contained' sx={{ backgroundColor: '#18D3B6', mt: 1, textTransform: 'capitalize', p: '10px 35px'}} >learn more </Button>

         </Box>
        </Grid>
      </Grid>
    </Box>
    
</>
  )
}
