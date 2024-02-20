import React, { useState } from 'react';

const PreviousState = () => {
    const [count, setCount] = useState(0);
    function updateCount(){
        // setCount(count + 1)
        // let randomValue = Math.floor(Math.random()*10);
        // setCount((prev) => {
        //     // console.log(prev);
        //     //  return count + 1;
        //     if(prev + randomValue > 6){
        //         console.log(`Hello ${prev} and ${randomValue}`)
        //     }
        //     return randomValue;
        // })

        //Example 2
        for(let i = 0; i < 5; i++){
            // setCount(count + 1)
            setCount((prev) => {
                return prev + 1
            })
        }
    }
  return (
    <>
     <h2>Previous State in React JS</h2> 
     <h3>Count: {count}</h3>
     <button onClick={updateCount}>Counter</button>
    </>
  );
}

export default PreviousState;
