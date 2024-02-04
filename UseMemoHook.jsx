import React, { useState, useMemo } from 'react';

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(2);

    const multiply = useMemo(function multi(){
        console.log("Multi Function For Count State")
        return count * 2;
    }, [count])
    return (
        <>
         <h2>useMemo Hook In React JS</h2>   
         <h3>Count: {count} </h3>
         <h3>{multiply}</h3>
         <button onClick={()=> setCount(count + 1)}>Update Count</button>
         <h3>Data: {data} </h3>
         <button onClick={()=> setData(data * 10)}>Update Data</button>
        </>
    );
};

export default UseMemoHook;