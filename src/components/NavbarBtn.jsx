import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan-600 to-orange hover:border-orange hover:scale-110 transition-all hover:shadow-cyanShadow'>
      Hire Me
      <div className='sm:hidden md:block'><LuArrowDownRight /></div>
    </button>
  )
}

export default NavbarBtn