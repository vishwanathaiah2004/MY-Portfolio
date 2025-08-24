import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import SingleSkill from './SingleSkill';
  
  const skills=[
    {
    skill:"HTML",
    icon:FaHtml5,
  },
  {
    skill:"CSS",
    icon:FaCss3,
  },
  {
    skill:"JavaScript",
    icon:IoLogoJavascript,
  },
  {
    skill:"ReactJs",
    icon:FaReact,
  },
  {
    skill:"TailwindCss",
    icon:RiTailwindCssFill,
  },
  {
    skill:"Typescript",
    icon:SiTypescript,
  },
  {
    skill:"NextJs",
    icon:RiNextjsFill,
  },
  {
    skill:"Git",
    icon:FaGitAlt 
  },
  
  

];

const AllSkills = () => {
  return (
    <div className=' flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        <div className='flex  gap-2 '>
            {skills.map((item,index)=>{
               return <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />}  />
            })}
        </div>
    </div>
  )
}

export default AllSkills