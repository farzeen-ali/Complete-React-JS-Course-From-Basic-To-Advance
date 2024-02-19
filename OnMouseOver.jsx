// import React, {useState} from 'react';

import HOC from "./HOC";

const OnMouseOver = ({value, increment}) => {
    // const [data, setData] = useState(0);
    // const increment = () => {
    //     setData(data + 1)
    // }
  return (
    <>
     <h2>Data {value} </h2> 
     <button onMouseOver={increment}>Update Data</button>
    </>
  );
}

export default HOC(OnMouseOver) ;
