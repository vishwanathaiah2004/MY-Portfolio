import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white '>
        <SingleInfo text='hmvishwanathaiah0@gmail.com' Image={MdOutlineEmail} />
        <SingleInfo text='+91 7483128294' Image={CiPhone} />
        <SingleInfo text='Mangalore, India' Image={CiLocationOn} />
    </div>
  )
}

export default ContactInfo