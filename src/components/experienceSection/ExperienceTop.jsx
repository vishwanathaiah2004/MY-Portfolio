import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopmiddle from './ExperienceTopmiddle'
import ExperienceTopRight from './ExperienceTopRight'

const ExperienceTop = () => {
  return (
    <div  className='flex lg:flex-row sm:flex-col gap-4 items-center justify-center'>
        <ExperienceTopLeft />
        <ExperienceTopmiddle />
        <ExperienceTopRight />
    </div>
  )
}

export default ExperienceTop