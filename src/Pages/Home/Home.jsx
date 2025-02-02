import React from 'react'
import { Footer, Navbar, Showcase } from '../../Components/componentIndex'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* main components here */}
      <Showcase/>
      <Footer/>
    </div>
  )
}

export default Home