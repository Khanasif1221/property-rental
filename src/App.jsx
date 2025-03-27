import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import BookingForm from './components/BookingForms'
import BackToTop from './components/BackToTop'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      
      <ToastContainer/>
      <Home/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <BookingForm/>
      <BackToTop/>

      
      {/* <PrivacyPolicy/> */}
      {/* <TermsConditions/> */}
      
      
    </div>
  )
}

export default App
