import React, { useEffect, useState } from 'react';

const PreFilledFormData = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({ name: "", age: "", salary: "" });
    useEffect(() => {
        showList();
    }, [])
    const showList = () => {
        fetch("http://localhost:3000/users").then((result) => {
            result.json().then((response) => {
                // console.log("Response: ", response)
                setData(response);
                setFormData({
                    name: response[0].name,
                    age: response[1].age,
                    salary: response[2].salary
                })
            })
        })
    }
    const editRecord = (userId) => {
        // console.log(data[userId - 1])
        let item = data[userId - 1];
        setFormData({
            name: item.name,
            age: item.age,
            salary: item.salary,
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
        <input type='text' value={formData.name} /><br /><br />
        <input type='text' value={formData.age} /><br /><br />
        <input type='text' value={formData.salary} /><br /><br />
        <button>Update</button>
     </div>
    </>
  );
}

export default PreFilledFormData;
