import React from 'react'

import '../../Style/ModalStyle/EduModalStyle.css'

const EducationModal = () => {
  return (
    <div>
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close-button" ></span>
          <h2>Education</h2>
          <p>University: Walchand Institute of Technology, Solapur</p>
          <p>Degree: Bachelor of Engineering in Computer Science</p>
          <p>Graduation Year: 2020</p>
        </div>
      </div>
    </div>
  )
}

export default EducationModal