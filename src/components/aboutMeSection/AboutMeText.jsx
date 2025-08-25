import React from 'react'

const AboutMeText = () => {
    return (
        <div className='flex flex-col md:items-start  sm:items-center md:text-left sm:text-center'>
            <h2 id='about' className='text-6xl text-cyan-500 mb-10 '>About Me</h2>
            <p  className='text-white'>
                I’m a Front-End Developer who loves turning ideas into clean, responsive, and engaging web experiences. With strong skills in React, JavaScript, and Tailwind CSS, I build interfaces that balance modern design with performance and usability. Always curious and eager to learn, I stay updated with the latest web trends to deliver creative, user-focused solutions.
            </p>
            <button className='border border-orange  rounded-full py-2 px-4 text-lg flex items-center  mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan-400 '>My Projects</button>
        </div>
    )
}

export default AboutMeText