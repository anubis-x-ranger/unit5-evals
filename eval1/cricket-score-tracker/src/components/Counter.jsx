import React,{useState} from 'react'

const Counter = (start) => {
 const [counter,setCounter]=React.useState(start);
  return (
    <div>Counter</div>
  )
}

export default Counter