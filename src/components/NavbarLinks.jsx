import React from 'react'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" }
];

const NavbarLinks = () => {
  return (
    <ul className="
      flex flex-col gap-6 
      text-white font-bold text-center text-lg
      absolute top-[120%] left-1/2 -translate-x-1/2 
      w-full py-4 bg-cyan-400/30 backdrop-blur-lg
      lg:static lg:flex-row lg:translate-x-0 lg:top-auto lg:left-auto 
      lg:bg-black lg:py-0 lg:text-xl
    ">
      {links.map((link, index) => (
        <li key={index} className="group">
          <a 
            href={`#${link.section}`} 
            className="cursor-pointer text-white hover:text-cyan-400 transition-all duration-500"
          >
            {link.link}
          </a>
          <div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  )
}

export default NavbarLinks
