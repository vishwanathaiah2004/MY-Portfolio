import React from 'react'
import NavbarMain from './components/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMemain from './components/aboutMeSection/AboutMemain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import Subskills from './components/skillsSection/Subskills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectMain from './components/projectSections/ProjectMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

const App = () => {
  return (
    <main className=' font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMemain />
      <SkillsMain />
       <Subskills />
       <ExperienceMain />
       <ProjectMain />
       <ContactMeMain />
       <FooterMain />
      <HelperSection />
     
      
    </main>
  )
}

export default App