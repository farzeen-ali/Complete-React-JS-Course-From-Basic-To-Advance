import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "Increment":
          return state + 1
        case "Decrement":
          return state - 1
        default:
            return state;
    }
}
const UseReducerHook = () => {
   const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
     <h2>useReducer Hook In React JS</h2> 
     <h3>Count: {count} </h3>
     <button onClick={() => dispatch("Increment")}>Increment</button>
     <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </>
  );
}

export default UseReducerHook;
