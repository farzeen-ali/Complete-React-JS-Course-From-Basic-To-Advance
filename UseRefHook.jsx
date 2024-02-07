import React, {useRef} from 'react';

const UseRefHook = () => {
    let myRef = useRef();
    function modifyInput() {
        // console.log(myRef.current.value)
        // myRef.current.value = "Farzeen"
        // myRef.current.style.backgroundColor = "yellow"
        // myRef.current.style.color = "red"
        // myRef.current.focus();
        myRef.current.style.display = "none"
    }
    // console.log("Rendering")
  return (
    <>
     <h2>useRef hook In React JS</h2> 
     <input type='text' ref={myRef} />
     <button onClick={() => modifyInput()}>Clicked</button>
    </>
  );
}

export default UseRefHook;
