import React from 'react'
import Navigation from '../../Multiple/Navigation/Navigation'
import Services from '../Services/Services'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'



function Home() {
  return (
    <>
    <Navigation></Navigation>
    <Services/>
    <AppointmentBanner></AppointmentBanner>
   
    </>
  )
}

export default Home 