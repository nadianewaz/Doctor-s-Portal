import React from 'react'

function AvailableAppointments( {date}) {
  return (
    <>
    <h2>Available Appointment {date.toDateString()}</h2>
    
    </>
  )
}

export default AvailableAppointments
