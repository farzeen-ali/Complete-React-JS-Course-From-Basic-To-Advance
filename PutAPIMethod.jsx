import React, { useEffect, useState } from 'react';

const PutAPIMethod = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({ id: null, name: "", age: "", salary: "" });
    useEffect(() => {
        showList();
    }, [])
    const showList = () => {
        fetch("http://localhost:3000/users").then((result) => {
            result.json().then((response) => {
                // console.log("Response: ", response)
                setData(response);
                setFormData({
                    id: response[0].id,
                    name: response[0].name,
                    age: response[0].age,
                    salary: response[0].salary
                })
            })
        })
    }
    const editRecord = (id) => {
        let item = data[id - 1];
        setFormData({
            id: item.id,
            name: item.name,
            age: item.age,
            salary: item.salary,
        })
    }
    const updateRecord = () => {
        let id = formData.id;
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((result) => {
            result.json().then((response) => {
                console.log("Response: ", response);
                showList();
            })
        })
    }
  return (
    <>
     <h2>Pre Filled Form Data in React JS</h2> 
     <table border='1'>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td>Salary</td>
                <td>Update Record</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((val, i) =>
                <tr key={i}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.salary}</td>
                    <td><button onClick={() => editRecord(val.id)}>Edit</button></td>
                </tr>
                
                )
            }
        </tbody>
     </table> 
     <div>
        <input type='text' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value })} /><br /><br />
        <input type='text' value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value })} /><br /><br />
        <input type='text' value={formData.salary} onChange={(e) => setFormData({...formData, salary: e.target.value })} /><br /><br />
        <button onClick={updateRecord}>Update</button>
     </div>
    </>
  );
}

export default PutAPIMethod;
