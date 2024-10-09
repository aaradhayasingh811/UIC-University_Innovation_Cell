import React from 'react'
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import About from '../Components/About';
import Inno from '../Components/Inno'
import President from '../Components/President'
import Event_sec from '../Components/Event_sec'
import Event from '../Components/Event';
import Landing from '../Components/Landing';
const Main = () => {
  return (
    <div className='bg-[#f3f4f6]'>
      <Nav/>
      <Landing/>
      <About/>
      <President />
      {/* <Event_sec/> */}
      <Event/>
      <Inno/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main
