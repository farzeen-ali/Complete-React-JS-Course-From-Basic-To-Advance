import axios from 'axios';
import React, { useEffect } from 'react';

const AxiosDeleteRequest = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            console.log(response.data)
        })
    }, []);
    const deleteRecord = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            alert('Post Has Been Deleted!!')
        })
    }
  return (
    <>
     <h2>Axios Delete Request Method</h2> 
     <button onClick={deleteRecord}>Delete</button>
    </>
  );
}

export default AxiosDeleteRequest;
