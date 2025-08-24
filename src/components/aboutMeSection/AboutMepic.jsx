import React from 'react'

const AboutMepic = () => {
  return (
    <div className='h-[500px] w-[300px]  relative'>
        <div  className='h-[500px]  w-[300px] rounded-[100px] absolute overflow-hidden'>
            <img src="/images/971.jpg" alt="about me image" className='h-full w-auto object-cover' />
        </div>
        <div  className='h-[500px] w-[250px] bg-orange absolute  buttom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[120px] rounded-tl-[120px] -z-10'></div>
    </div>
  )
}

export default AboutMepic