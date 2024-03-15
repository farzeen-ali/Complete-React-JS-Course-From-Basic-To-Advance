import React, { useEffect, useState } from 'react';

const APICalling = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((response) => { 
                // console.log("Response: ", response)
                setData(response);
            })
        })
    }, [])
  return (
    <>
     <h2>API Calling</h2>
     <table border='1'>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
                <td>City</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((val) => 
                <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.address.city}</td>
                </tr>
                
                )
            }
        </tbody>
     </table> 
    </>
  );
}

export default APICalling;
