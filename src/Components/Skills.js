import React, { useState } from 'react'
import '../Style/Skills.css'
import SkillsModal from './Modals/SkillsModal'



const Skills = () => {
    const [isOpen,setOpen]= useState(false);

    const openSkillsModal = () =>{
      setOpen(true);
    }

    const closeSkillsModal = () => {
      setOpen(false);
    }

  return (
    <>
    <div className='Skills' onClick={openSkillsModal }>Skills
    </div>
     <SkillsModal className = 'modal' isOpen={isOpen} onClose={closeSkillsModal}/>
     </>
  )
}

export default Skills