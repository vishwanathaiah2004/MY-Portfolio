import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactmeRight from './ContactmeRight'

const ContactMeMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 '>
        <h2 className='text-6xl text-cyan-400  mb-10 text-center'>Contact Me</h2>
        <div className='flex justify-between gap-24 bg-brownn p-8 rounded-2xl lg:flex-row sm:flex-col'>
            <ContactMeLeft />
            <ContactmeRight />
        </div>
    </div>
  )
}

export default ContactMeMain