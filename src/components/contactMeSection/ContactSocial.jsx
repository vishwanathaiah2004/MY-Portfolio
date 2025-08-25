import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://github.com/vishwanathaiah2004' Icon={ FaGithub}  />
        <SingleContactSocial link='https://www.linkedin.com/in/h-m-vishwanathaiah-02926932a' Icon={ FaLinkedin}  />
    </div>
  )
}

export default ContactSocial