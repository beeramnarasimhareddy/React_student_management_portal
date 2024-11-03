

import React, { useState } from 'react';
import './styling/Navbar.css';
import StudentCount from './StudentCount';
import StudentDetails from './StudentDetails';

const Students = ({ data, setData }) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [classFilter, setClassFilter] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editStudentData, setEditStudentData] = useState(null);

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const handleDelete = (id) => {
    setData((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  const handleEdit = (student) => {
    setIsEditing(true);
    setEditStudentData(student);
  };

  const handleView = (student) => {
    setSelectedStudent(student);
  };

  const closeDetails = () => {
    setSelectedStudent(null);
  };

  const handleUpdate = (updatedStudent) => {
    setData((prevStudents) =>
      prevStudents.map((student) => (student.id === updatedStudent.id ? updatedStudent : student))
    );
    setIsEditing(false);
    setEditStudentData(null);
  };

  return (
    <div className='scon'>
      <h2 className='red'>Student Management Portal</h2>

      <input type="text" className='Searchfilter' onChange={(e) => setSearch(e.target.value)} placeholder='search here' />

      <select value={classFilter} className='drop' onChange={(e) => setClassFilter(e.target.value)}>
        <option value="">Filter by Class</option>
        <option value="10th Grade">10th Grade</option>
        <option value="11th Grade">11th Grade</option>
        <option value="12th Grade">12th Grade</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            {/* <th>Activity</th> */}
          </tr>
        </thead>
        <tbody>
          {data.slice(page * 5 - 5, page * 5).filter((student) => {
            return classFilter ? student.class === classFilter : true;
          }).filter((student) => {
            return search.toLowerCase() === '' ? student : student.name.toLowerCase().includes(search);
          }).map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
            
            </tr>
          ))}
        </tbody>
      </table>

      {data.length > 0 && (
        <div className='pages'>
          {[...Array(Math.ceil(data.length / 5))].map((_, i) => {
            return <span key={i} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>;
          })}
        </div>
      )}

      {selectedStudent && <StudentDetails student={selectedStudent} onClose={closeDetails} />}
      {isEditing && (
        <Registration
          addStudents={handleUpdate}
          formData={editStudentData}
          setFormData={setEditStudentData}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Students;
