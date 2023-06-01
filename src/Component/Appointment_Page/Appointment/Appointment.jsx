import React from 'react'
import Navigation from '../../Multiple/Navigation/Navigation'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'
import dayjs, { Dayjs } from 'dayjs';

export default function Appointment() {
  const [ date, setDate ] = React.useState(dayjs(new Date()));
  console.log(date['$d'])
  return (
    <>
    <Navigation></Navigation>
    <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
    <AvailableAppointments date={date}></AvailableAppointments> 
    
    
    
    </>                            
  )
}
