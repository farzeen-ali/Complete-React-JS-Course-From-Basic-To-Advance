import React from 'react';
// import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
const BootstrapArrayListing = () => {
    const employeeInfo = [
        {name: "Farzeen", email: "farsdzeen@gmail.com", contact: 1245345},
        {name: "Bilal", email: "bilal@gmail.com", contact: 34566},
        {name: "Farzeen", email: "farazeen@gmail.com", contact: 12323445},
        {name: "Huzaifa", email: "huzaifa@gmail.com", contact: 894756},
        {name: "Farzeen", email: "farzeen@gmail.com", contact: 12377845},
        {name: "Ali", email: "ali@gmail.com", contact: 927465}
    ]
  return (
    <>
     <h2>Array Listing With Bootstrap Table</h2> 
     {/* <Button variant="success" onClick={() => alert("Hello From Bootstrap")}>Success</Button> */}

    <Table variant='dark' striped bordered hover>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Contact</td>
            </tr>
        </thead>
        <tbody>
        {
            employeeInfo.map((item, i) =>
            item.name === "Farzeen" ? 
                <tr key={i}>
                    <td> {i + 1} </td>
                    <td> {item.name} </td>
                    <td> {item.email} </td>
                    <td> {item.contact} </td>
                </tr> 
                :null
            )
            
        }
        </tbody>
    </Table>

    </>
  );
}

export default BootstrapArrayListing;
