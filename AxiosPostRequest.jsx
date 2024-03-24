import axios from 'axios';
import React, { useState } from 'react';

const AxiosPostRequest = () => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })
    const handleInput = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {post}).then((response) => {
            console.log(response);
        })
    }
  return (
    <>
     <h2>Axios Post Request</h2> 
     <form onSubmit={handleSubmit}>
        <input type='text' name='title' onChange={handleInput} placeholder='Enter Title' /> <br /><br />
        <input type='text' name='body' onChange={handleInput} placeholder='Enter Description' /><br /><br />
        <button onClick={handleSubmit}>Submit</button>
     </form>
    </>
  );
}

export default AxiosPostRequest;
