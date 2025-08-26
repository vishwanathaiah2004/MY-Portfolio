import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactmeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src="public/images/email.png" alt="contactme"  className='max-w-[300px] ' />
        <ContactInfo />
        <ContactSocial />
    </div>
  )
}

export default ContactmeRight