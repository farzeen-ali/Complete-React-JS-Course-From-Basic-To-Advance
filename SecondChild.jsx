import React, {useContext} from 'react';
import {MyData} from './ContextApiWithHooks';

const SecondChild = () => {
    const {valueData, getSalary} = useContext(MyData);
    const salary = 50000;
  return (
    <>
     <h2>Second Child</h2> 
     <h2>Value Data in Second Child: {valueData} </h2> 
     <button onClick={()=> getSalary(salary)}>Salary</button>
    </>
  );
}

export default SecondChild;
