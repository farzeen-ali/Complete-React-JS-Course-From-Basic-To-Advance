import React from 'react';
import Employee from './Employee';

const Reuse = () => {
    const employeeInfo = [
        {name: "Farzeen", email: "farzeen@gmail.com", contact: 12345},
        {name: "Bilal", email: "bilal@gmail.com", contact: 34566},
        {name: "Huzaifa", email: "huzaifa@gmail.com", contact: 894756},
        {name: "Ali", email: "ali@gmail.com", contact: 927465}
    ]
  return (
    <>
     <h2>Reuse In React JS</h2> 
     {
        employeeInfo.map((item, i) => 
            <Employee data={item} />
        )
     }
    </>
  );
}

export default Reuse;
