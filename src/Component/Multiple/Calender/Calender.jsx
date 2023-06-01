import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


const Calender = ( {date, setDate} ) => {
    return (
        <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={date}
      onChange={ (newValue) => {
        setDate(newValue);
      }}/>
    </LocalizationProvider>

 

            
        </>
    );
};

export default Calender;