import { Grid } from '@mui/material';
import Calender from '../../../Multiple/Calender/Calender';
import Appointments from '../Appointments/Appointments';
import * as React from 'react';
import dayjs from 'dayjs';

const DashboardHome = () => {
  // User data with date
  const [ date, setDate ] = React.useState(dayjs(new Date()));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
        <Calender
          date={date}
          setDate={setDate}>  
        </Calender>
      </Grid>
      <Grid item xs={12} sm={7}> 
        <Appointments date={date}></Appointments> 
        
      </Grid>
    </Grid>
  );
};

export default DashboardHome;