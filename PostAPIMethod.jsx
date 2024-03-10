import React, { useState } from 'react';

const PostAPIMethod = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");
    const formSubmit = () => {
        // console.log({name, age, salary})
        let data = {name, age, salary};
        fetch("https://dummy.restapiexample.com/api/v1/create", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log("Result: ", result)
        })
    }
  return (
    <>
     <h2>Post API Method</h2>
     <input type='text' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
     <input type='number' placeholder='Enter Your Age' value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
     <input type='number' placeholder='Enter Your Salary' value={salary} onChange={(e) => setSalary(e.target.value)} /><br /><br />
     <button type='button' onClick={formSubmit}>Submit</button>
    </>
  );
}

export default PostAPIMethod;
