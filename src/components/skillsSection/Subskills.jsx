import React from 'react'

const Subskills = () => {
  return (
    <div className="relative w-full h-12 md:h-16 border-y-2 border-lightGrey overflow-hidden">
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange to-cyan-400 opacity-50 z-10"></div>

      {/* banner image */}
      <img 
        src="/images/banner.jpg" 
        alt="subskills img" 
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Subskills
