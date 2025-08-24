import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const projects =[
    {
    name:' Live Video Streaming Web App',
    year:'August -2025',
    align:'right',
    image:'/images/p1.png',
    link:'#',
},
   {
    name:' Live Video Streaming Web App',
    year:'August -2025',
    align:'left',
    image:'/images/p1.png',
    link:'#',
},
     {
    name:' Live Video Streaming Web App',
    year:'August -2025',
    align:'right',
    image:'/images/p1.png',
    link:'#',
},   
      {
    name:' Live Video Streaming Web App',
    year:'August -2025',
    align:'left',
    image:'/images/p1.png',
    link:'#',
},

];

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4 '>
        <ProjectText />
        <div className='flex flex-col gap-20 max-w-[900px] mx-automt-12'>
           {projects.map((item,index)=>{
            return  <SingleProject  key={index} name={item.name} year={item.year} align={item.align} image={item.image}/>
           })}
        </div>
    </div>
  )
}

export default ProjectMain