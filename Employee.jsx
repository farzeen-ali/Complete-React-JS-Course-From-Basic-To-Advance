import React from 'react';

const Employee = (prop) => {
  return (
    <>
     <h2> {prop.data.name} </h2> 
     <h2> {prop.data.email} </h2> 
     <h2> {prop.data.contact} </h2> 
    </>
  );
}

export default Employee;
