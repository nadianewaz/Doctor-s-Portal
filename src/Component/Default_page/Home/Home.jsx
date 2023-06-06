import React from 'react'
import Navigation from '../../Multiple/Navigation/Navigation'
import Services from '../Services/Services'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Banner from '../Banner/Banner'
import ExceptionalSection from '../ExceptionalSection/ExceptionalSection'



function Home() {
  return (
    <>
    <Navigation></Navigation>
    <Banner></Banner>
    <Services/>
    <ExceptionalSection></ExceptionalSection> 
    <AppointmentBanner></AppointmentBanner>
   
    </>
  )
}

export default Home 