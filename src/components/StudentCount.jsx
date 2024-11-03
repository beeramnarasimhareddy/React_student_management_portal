import React from 'react'
import './styling/Navbar.css'


const StudentCount = ({total}) => {
  return (
    <div>
      
      <div className="student-count-container">
      <h1 className='count'>Total: {total}</h1>
    </div>


    </div>
  )
}

export default StudentCount


