import React from 'react'
import dayjs, { Dayjs } from 'dayjs';

function AvailableAppointments( {date}) {
  return (
    <>
    <h2>Available Appointment {dayjs(date).format('DD/MM/YYYY')}</h2>
    
    </>
  )
}

export default AvailableAppointments
