import React, { useState } from 'react';
import './styling/Navbar.css';

const Registration = ({ addStudents }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(), 
      name: formData.name,
      email: formData.email,
      class: formData.class,
    };
    addStudents(newStudent); 
    setFormData({
      name: '',
      email: '',
      age: '',
      class: '',
      address: '',
      phoneNumber: ''
    });
  };

  return (
    <div className='fcon'>
      <h2 className='red'>Register Here</h2>
      <form onSubmit={handleSubmit} className='form'>
        Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
        Email: <input type='email' name="email" value={formData.email} onChange={handleChange} />
        Age: <input type="number" name="age" value={formData.age} onChange={handleChange} />
        Class: <input type="text" name="class" value={formData.class} onChange={handleChange} />
        Address: <textarea name="address" value={formData.address} onChange={handleChange} />
        Phone Number: <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        <button type='submit' className='fsub'>Submit</button>
      </form>
    </div>
  );
};

export default Registration;
