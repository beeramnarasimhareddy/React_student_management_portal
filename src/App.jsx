import { React, useEffect, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Students from './components/Students';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import StudentCount from './components/StudentCount';
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dpaste.com/DBQS4CGRZ.txt')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const addStudents = (newStudent) => {
    setData((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<StudentCount total={data.length} />} />
          <Route path='/registration' element={<Registration addStudents={addStudents} />} />
          <Route path='/students' element={<Students data={data} />} />
        </Routes>
      </BrowserRouter>
      {loading && <p>Loading data...</p>}
      <Outlet />
    </div>
  );
};

export default App;
