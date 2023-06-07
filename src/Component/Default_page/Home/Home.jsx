import React from 'react'
import Navigation from '../../Multiple/Navigation/Navigation'
import Services from '../Services/Services'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Banner from '../Banner/Banner'
import ExceptionalSection from '../ExceptionalSection/ExceptionalSection'
import Testimonials from '../Testimonials/Testimonials'



function Home() {
  return (
    <>
    <Navigation></Navigation>
    <Banner></Banner>
    <Services/>
    <ExceptionalSection></ExceptionalSection> 
    <AppointmentBanner></AppointmentBanner>
   <Testimonials></Testimonials>
   
    </>
  )
}

export default Home 