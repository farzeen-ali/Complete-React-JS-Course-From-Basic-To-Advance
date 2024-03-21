import React from 'react';
import useCount from './useCount.js'
const MyCounter = () => {
    // const [count, setCount] = useState(0);
    // const increment = () => {
    //     setCount(count + 1)
    // }
    // const decrement = () => {
    //     setCount(count - 1)
    // }
    const [count, increment, decrement]  = useCount(0);
  return (
    <>
     <h2>My Counter App</h2> 
     <h3>Count: {count}</h3>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default MyCounter;
