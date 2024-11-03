
import React from 'react';

const StudentDetails = ({ student, onClose }) => {
  return (
    <div className='modal'>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Class:</strong> {student.class}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default StudentDetails;
