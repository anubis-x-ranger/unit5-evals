import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar></Navbar>
    <Routes>
      <Route to="/" element={<Home/>}></Route>
      <Route to="/login" element={<Login/>}></Route>
      <Route to="/employees" element={<EmployeeList/>}></Route>
      <Route to="/employees:id" element={<EmployeeDetails/>}></Route>
      <Route to="/admin" element={<Admin/>}></Route>
      <Route to="/logout" element={<Logout/>}></Route>
    </Routes>

    </div>
  )
}

export default App
