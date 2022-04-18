import { useState } from 'react'
import { AddStudent } from './components/AddStudent';
import './App.css'
import { ShowStudents } from './components/ShowStudents';

function App() {
  const [pageText, setPageText] = useState("false");
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>setPageText(!pageText)}>{pageText ?  "Add Student"
      : "go to Student list"}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {pageText ? <ShowStudents/>:<AddStudent/>}
    </div>
  );
}

export default App
