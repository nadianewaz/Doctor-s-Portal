import React from 'react'
import dayjs from 'dayjs';
import {  Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Booking from '../Booking/Booking';


const bookings = [
  {
    id: 1,
    name:'Teeth Orthodontics',
    time:'8:00 AM - 9:00 AM',
    space: 10
  },
  {
    id: 2,
    name:'Cosmetic Dentistry ',
    time:'10:05 AM - 11:30 AM',
    space: 10
  },
  {
    id: 3,
    name:'Teeth Cleaning',
    time:'5:00 PM - 6:30 PM',
    space: 10
  },
  {
    id: 4,
    name:'Cavity Protection',
    time:'7:00 AM - 8:30 AM',
    space: 10
  },
  {
    id: 1,
    name:'Teeth Orthodontics',
    time:'8:00 AM - 9:00 AM',
    space: 10
  },
  {
    id: 1,
    name:'Teeth Orthodontics',
    time:'8:00 AM - 9:00 AM',
    space: 10
  },
];

function AvailableAppointments( {date}) {
  return (
    <>
      <Typography sx={{ textAlign: 'center', color: '#1CC7C1', fontWeight: '600', my: 5}}>
        <h2>Available Appointment on {dayjs(date).format('DD/MM/YYYY')}</h2>
      </Typography>

    <Container> 
    <Grid container spacing={2}>
      {
       bookings.map( bookingElement => <Booking
       key={bookingElement.id}
       booking1={bookingElement}
       date={date} >  
      

       </Booking>)


      }
      
    </Grid>
    </Container>
    
    </>                                                                           
  )
}

export default AvailableAppointments
