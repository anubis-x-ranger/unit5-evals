import { useState } from 'react'
import { AddStudent } from './components/AddStudent';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className="togglebtn" >{}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      <AddStudent/>
    </div>
  );
}

export default App
