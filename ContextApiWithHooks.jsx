import React, { useState, createContext } from 'react';
import FirstChild from './FirstChild';
import ChildA from './ChildA';

//Create, Provide, Use

export const MyData = createContext();

const ContextApiWithHooks = () => {
    const [data, setData] = useState(1);
    const [salary, setSalary] = useState();

    const getSalary = (val) => {
        console.log("Salary is: ", val);
        setSalary(val);
    }

  return (
    <MyData.Provider value={{ valueData: data, getSalary: getSalary}}>
        <>
            <h2>Context Api With Hooks In React Js</h2> 
            <h2>Salary From Super Child: {salary} </h2> 
            <button onClick={() => setData(data + 1)}>Update Data</button>
            <FirstChild />
            <ChildA />
        </>
    </MyData.Provider>
  );
}

export default ContextApiWithHooks;
