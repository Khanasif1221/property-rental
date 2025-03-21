import React from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      {/* <Navbar /> */}
      <Header/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
