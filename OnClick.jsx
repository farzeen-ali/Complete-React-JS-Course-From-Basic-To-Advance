// import React, { useState } from 'react';

import HOC from "./HOC";

const OnClick = ({value, increment}) => {
    // const [count, setCount] = useState(0);
    // const increment = () => {
    //     setCount(count + 1)
    // }
  return (
    <>
     <h2>Count {value} </h2> 
     <button onClick={increment}>Update Count</button>
    </>
  );
}

export default HOC(OnClick) ;
