import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const projects =[
    {
    name:' MY personal Portfolio',
    year:'August -2025',
    align:'right',
    image:'/MY-Portfolio/images/imgmp.png',
    link:'https://github.com/vishwanathaiah2004/MY-Portfolio',
},
   {
    name:' Live Video Streaming Web App',
    year:'August -2025',
    align:'left',
    image:'/MY-Portfolio/images/p1.png',
    link:'https://github.com/vishwanathaiah2004/Live-Streaming',
},
     {
    name:' Lezerev Website Clone',
    year:'July -2025',
    align:'right',
    image:'/MY-Portfolio/images/LEZ.png',
    link:'https://github.com/vishwanathaiah2004/Lazarev-Clone',
},   
      {
    name:' NETFLIX-Clone',
    year:'June-2025',
    align:'left',
    image:'/MY-Portfolio/images/NET.png',
    link:'https://github.com/vishwanathaiah2004/NetflixClone',
},
 {
    name:' TODO-List',
    year:'May -2025',
    align:'right',
    image:'/MY-Portfolio/images/TODO.png',
    link:'https://github.com/vishwanathaiah2004/MyToDoList',
},

];

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4 '>
        <ProjectText />
        <div className='flex flex-col gap-20 max-w-[900px] mx-automt-12'>
           {projects.map((item,index)=>{
            return  <SingleProject  key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
           })}
        </div>
    </div>
  )
}

export default ProjectMain