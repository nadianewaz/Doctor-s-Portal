import React from 'react'
import Navigation from '../../Multiple/Navigation/Navigation'
import Services from '../Services/Services'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Banner from '../Banner/Banner'
import ExceptionalSection from '../ExceptionalSection/ExceptionalSection'
import Testimonials from '../Testimonials/Testimonials'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../../Multiple/Footer/Footer'
import OurBlogs from '../OurBlogs/OurBlogs'



function Home() {
  return (
    <>
    <Navigation></Navigation>
    <Banner></Banner>
    <Services/>
    <ExceptionalSection></ExceptionalSection> 
    <AppointmentBanner></AppointmentBanner>
    <Testimonials></Testimonials>
    <OurBlogs></OurBlogs>
    <ContactUs></ContactUs>
    <Footer></Footer>
   
    </>
  )
}

export default Home 