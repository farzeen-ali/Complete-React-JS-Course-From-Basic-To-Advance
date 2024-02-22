import React, { useState } from 'react';

const StateWithObject = () => {
    const [info, setInfo] = useState({name: "Farzeen", age: 23})
  return (
    <>
     <h2>State With Object In React JS</h2>
     <input type='text' value={info.name}
      onChange={(e) => setInfo({/* age: info.age ,*/ ...info, name: e.target.value})} /> 
     <input type='text' value={info.age}
      onChange={(e) => setInfo({/* name: info.name,*/ ...info, age: e.target.value})} /> 
     <h3>Name: {info.name} </h3>
     <h3>Age: {info.age} </h3>
    </>
  );
}

export default StateWithObject;
