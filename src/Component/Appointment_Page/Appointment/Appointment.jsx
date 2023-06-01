import React from 'react'
import Navigation from '../../Multiple/Navigation/Navigation'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

export default function Appointment() {
  const [ date, setDate ] = React.useState(new Date());
  return (
    <>
    <Navigation></Navigation>
    <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
    <AvailableAppointments date={date}></AvailableAppointments> 
    
    
    
    </>                            
  )
}
