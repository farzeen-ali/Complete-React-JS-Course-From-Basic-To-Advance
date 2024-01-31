import React, {useEffect, useState} from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("UseEffect Hook In React")
    })
  return (
    <>
      <h2>useEffect Hook</h2>
      <h3>Count: {count} </h3>
      <button onClick={()=> setCount(count + 1)}>Counter</button>
    </> 
  )
}

export default UseEffectHook
