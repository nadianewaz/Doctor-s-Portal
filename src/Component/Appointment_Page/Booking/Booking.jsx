import { Grid, Paper } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking1, date, setBookingSuccess}) => {
    const { name, time, space } = booking1;

    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
    <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{py: 5, textAlign: 'center'}} >
        <Typography sx={{fontWeight: '400', color: '#1CC7C1'}} variant="h5" gutterBottom>
           {name} 
        </Typography>
        <Typography variant="h6" gutterBottom>
           {time} 
        </Typography>
        <Typography variant="caption" gutterBottom>
           {space} SPACES AVAILABLE 
        </Typography>
        <Typography> 
        <Button onClick={handleBookingOpen} sx={{mt: 1, backgroundColor: '#18D3B6', textTransform: 'uppercase'}} variant="contained"> book appointment </Button>
        </Typography>

        </Paper>
    </Grid>
    <BookingModal
    date={date}
    booking={booking1}
    openBooking={openBooking}
    handleBookingClose={handleBookingClose} 
    setBookingSuccess={setBookingSuccess}
    ></BookingModal>
    </>
    );
};

export default Booking;