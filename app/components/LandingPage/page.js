import React from 'react'
import Hero from '../Hero'
import AboutUS from '../About'
import EcoSystem from '../EcoSystem'
import BusinessUtility from '../BusinessUtility'
import RoadMap from '../RoadMap'

const LandingPage = () => {
  return (
   <>
   <div className='bg-black'>
   <Hero/>
   <AboutUS/>
   <EcoSystem/>
   <BusinessUtility/>
   <RoadMap/>
   </div>
   </>

  )
}

export default LandingPage
