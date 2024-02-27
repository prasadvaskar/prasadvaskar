import React from 'react'
import Intro from './Intro';
import PExperience from './PExperience';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Today from './Today';

import '../Style/Container.css'
import '../Style/Intro.css'


const Container = () => {
  return (
    <div className='Container'>
      <div className='top4'>
        <div className='div1'>
          <div className='div3'>
            <div className='IntroBox'>
              <Intro className='Intro' />
            </div>
            <div className='pExpBox'>
              <PExperience className='PExperience' />
            </div>
          </div>
          <div className='div4'>
            <div className='SkillsBox'>
              <Skills className='Skills' />
            </div>
            <div className='EducationBox'>
              <Education className='Education' />
            </div>
          </div>
        </div>
        <div className='div2'>
          <div className='ContactBox'>
            <Contact className='Contact' />
          </div>
          <div className='ProjectBox'>
            <Projects className='Projects' />
          </div>
        </div>
      </div>
      <div className='last1'>
        <div className='TodayBox'>
          <Today className='Today' />
        </div>
      </div>
    </div>
  )
}

export default Container;