import React, { useState } from 'react'
import '../../Style/ModalStyle/SkillsModalStyle.css'

const SkillsModal = ({isOpen, onClose}) => {




  return (
    <div>
      <div className={`box1-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close-button"  onClick={onClose}>X</span>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            {/* Add more skills as needed */}
          </ul>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default SkillsModal;