import React, { useState } from 'react'

function Hooks() {
    const [name, setName] = useState("Huzaifa");
  return (
    <>
     <h2>Hooks In React Js</h2> 
     <h3>Hello, {name} </h3>
     <button onClick={()=> setName("Farzeen")}>Update Name</button>
    </>
  )
}

export default Hooks
