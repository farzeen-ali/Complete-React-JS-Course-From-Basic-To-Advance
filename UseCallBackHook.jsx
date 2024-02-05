import React, { useCallback, useState } from 'react';
import ExampleUseCallbackHook from './ExampleUseCallbackHook';

const UseCallBackHook = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(2);

    const newData = useCallback(() => {
        console.log("I'm new Data Function", item)
    }, [item])
  return (
    <>
     <h2>useCallback Hook In React</h2> 
     <h3>Count: {count}</h3>
     <button onClick={() => setCount(count + 1)}>Counter</button>
     <ExampleUseCallbackHook item={item} data={newData} />
     <button onClick={() => setItem(item * 2)}>Item</button>
    </>
  );
}

export default UseCallBackHook;
