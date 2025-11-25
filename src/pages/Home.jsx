import React from 'react'
import Banner from '../components/Banner'
import FeaturedHabits from '../components/FeaturedHabits'
import WhyBuildHabits from '../components/WhyBuildHabits'
import HowItWorks from '../components/HowItWorks'
import SuccessStories from '../components/SuccessStories'

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <FeaturedHabits/>
      <WhyBuildHabits/>
      <HowItWorks/>
      <SuccessStories/>
    </div>
  )
}

export default Home