import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosGetRequest = () => {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url).then((response) => {
            // console.log(response)
            setMyData(response.data)
        })
    }, []);
  return (
    <>
     <h2>Axios Get Request</h2> 
     {
        myData.map((item, i) => {
            return(
                <h4 key={i}>{item.name}</h4>
            )
        })
     }
    </>
  );
}

export default AxiosGetRequest;
