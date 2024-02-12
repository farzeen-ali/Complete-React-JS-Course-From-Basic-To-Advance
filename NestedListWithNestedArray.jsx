import React from 'react';

import { Table } from 'react-bootstrap'

const NestedListWithNestedArray = () => {
    const employeeInfo = [
        {name: "Farzeen", email: "farzeen@gmail.com", address: [
            {houseNo: "123", city: "Karachi", country: "Pakistan"},
            {houseNo: "456", city: "Delhi", country: "India"},
            {houseNo: "789", city: "Dhaka", country: "Bangladesh"}
        ]},
        {name: "Bilal", email: "bilal@gmail.com", address: [
            {houseNo: "123", city: "Karachi", country: "Pakistan"},
            {houseNo: "456", city: "Delhi", country: "India"},
            {houseNo: "789", city: "Dhaka", country: "Bangladesh"}
        ]},
        {name: "Huzaifa", email: "huzaifa@gmail.com", address: [
            {houseNo: "123", city: "Karachi", country: "Pakistan"},
            {houseNo: "456", city: "Delhi", country: "India"},
            {houseNo: "789", city: "Dhaka", country: "Bangladesh"}
        ]},
        {name: "Ali", email: "ali@gmail.com", address: [
            {houseNo: "123", city: "Karachi", country: "Pakistan"},
            {houseNo: "456", city: "Delhi", country: "India"},
            {houseNo: "789", city: "Dhaka", country: "Bangladesh"}
        ]}
    ]
  return (
    <>
     <h2>Nested List With Nested Array In React JS</h2> 
     <Table variant='dark' striped bordered hover>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
            </tr>
        </thead>
        <tbody>
            {
                employeeInfo.map((item, i) => 
                    <tr key={i}>
                        <td> {i + 1} </td>
                        <td> {item.name} </td>
                        <td> {item.email} </td>
                        <td> 
                        <Table variant='dark'>
                            <tbody>
                            {
                                item.address.map((data, j) =>
                                    <tr key={j}>
                                        <td> {data.houseNo} </td>
                                        <td> {data.city} </td>
                                        <td> {data.country} </td>
                                    </tr>
                                )
                            }
                            </tbody>
                            </Table>
                        </td>
                    </tr>
                )
            }
        </tbody>
     </Table>
    </>
  );
}

export default NestedListWithNestedArray;
