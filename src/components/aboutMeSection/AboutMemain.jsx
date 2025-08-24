import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMepic from './AboutMepic'

const AboutMemain = () => {
  return (
    <div className=' flex md:flex-row sm:flex-col gap-12 px-4  max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
        <div>
        <AboutMeText />
        </div>
        <div>
        <AboutMepic />
        </div>
    </div>
  )
}

export default AboutMemain