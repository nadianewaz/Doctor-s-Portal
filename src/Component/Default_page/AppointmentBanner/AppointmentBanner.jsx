import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import { Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bg})`

}

export default function AppointmentBanner() {
  return (
    <>
    <Box style={{appointmentBg}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
          style={{width: 400}}
          src={doctor} alt=""/>
        </Grid>
        <Grid item xs={12} md={6}>
         <Typography variant='h6' sx={{ color: '#5FC7C7'}}>
            Appointment 
         </Typography>
         
        </Grid>
      </Grid>
    </Box>
    
</>
  )
}
