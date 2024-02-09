import React from 'react';

const ArrayListing = () => {
    // const employees = ["Farzeen", "Ali", "Huzaifa", "Bilal"];
    //using map function
    // employees.map((item) => {
    //     console.log("My Name Is: " , item)
    // } )
    //using for loop
    // for(let i = 0; i < employees.length; i++){
    //     console.log("My Name Is: " , employees[i])
    // }

    const employeeInfo = [
        {name: "Farzeen", email: "farzeen@gmail.com", contact: 12345},
        {name: "Bilal", email: "bilal@gmail.com", contact: 67890},
        {name: "Huzaifa", email: "huzaifa@gmail.com", contact: 234556},
        {name: "Ali", email: "ali@gmail.com", contact: 937765}
    ]

  return (
    <>
     <h2>Array Listing Using Map Function</h2> 
     {/* {
         employees.map((item) => 
         <h3> {item} </h3>
        )
     } */}
     {/* { //Error
          for(let i = 0; i < employees.length; i++){
            <h3> {employees[i]} </h3>
         } 
     } */}


     <table border={1}>
     <thead>
        <tr>
        <td> Name </td>
        <td> Email </td>
        <td> Phone </td>
        </tr>
     </thead>
        <tbody>
            {employeeInfo.map((emp) => 
                <tr key={emp.email}>
                    <td> {emp.name} </td>
                    <td> {emp.email} </td>
                    <td> {emp.contact} </td>
                </tr>
            )}
        </tbody>
     </table>
    </>
  );
}

export default ArrayListing;
