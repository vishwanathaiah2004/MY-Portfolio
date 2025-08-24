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

const AllskillsSm = () => {
  return (
    <div  className='grid  md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index)=>{
             return  <div key={index} className='flex flex-col items-center '>
                <item.icon className='text-7xl text-orange  ' />
                <p className='text-center mt-4 text-white'>{item.skill}</p>
             </div>
        })}
    </div>
  )
}

export default AllskillsSm