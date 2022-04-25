import { useState } from 'react'
import './App.css'
import {Navbar} from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { Logout } from "./components/Logout";
import { Home } from "./components/Home";
// import PrivateComponent from './components/PrivateComponent';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/employees" element={<EmployeeList/>}></Route>
         <Route path="/employees:id" element={<EmployeeDetails/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route> 
      </Routes>

    </div>
  )
}

export default App
