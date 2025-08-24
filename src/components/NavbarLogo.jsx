import React from 'react'

const NavbarLogo = () => {
  return (
    <div>
      {/* Desktop / Tablet */}
      <h1 className="hidden md:block text-white text-2xl font-bold">
        H M Vishwanathaiah
      </h1>

      {/* Mobile */}
      <h1 className="block md:hidden text-white font-serif font-extrabold text-4xl">
        HMV
      </h1>
    </div>
  )
}

export default NavbarLogo
