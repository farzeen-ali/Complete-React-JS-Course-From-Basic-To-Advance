import React from 'react';
import { useRef } from 'react';
const UncontrolledComponent = () => {
    let myRef = useRef(null);
    function myForm(e){
        e.preventDefault();
        // alert("First Input: " + myRef.current.value)
        console.log("First Input: " + myRef.current.value)
        let val = document.getElementById('myId').value;
        console.log("Second Input: " + val)
    }
  return (
    <>
     <h2>Uncontrolled Component in React JS</h2> 
     <form onSubmit={myForm}>
        <input type='text' ref={myRef} /> <br /> <br />
        <input type='text' id='myId' /> <br /> <br />
        <button>Submit</button>
     </form>
    </>
  );
}

export default UncontrolledComponent;
