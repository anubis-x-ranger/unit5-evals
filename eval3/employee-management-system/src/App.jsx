import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route to="/" element={<Home/>}>
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
