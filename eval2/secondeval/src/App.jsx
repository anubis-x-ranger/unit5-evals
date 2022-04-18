import { useState } from 'react'
import { AddStudent } from './components/AddStudent';
import './App.css'

function App() {
  const [pageText, setPageText] = useState("false")
  const handleClick=(e)=>{
    const {id}=e.target;
    setPageText(id);
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>handleClick("true")}>{pageText}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      <AddStudent/>
    </div>
  );
}

export default App
