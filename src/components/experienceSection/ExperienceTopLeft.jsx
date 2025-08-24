import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col  gap-6  w-[300px] '>
        <p className='text-orange  font-bold  uppercase text-3xl font-sans text-center'>Since 2024</p>
        <div className='flex justify-center  gap-4 '>
            <ExperienceInfo  number="1" text="Years" />
            <p className='font-bold text-6xl text-lightBrown '>-</p>
            <ExperienceInfo  number="5" text="Websites" />
        </div>
        <p  className='text-center text-white '>with 1 year + experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque</p>
          <ExperienceInfo />
    </div>
  )
}

export default ExperienceTopLeft