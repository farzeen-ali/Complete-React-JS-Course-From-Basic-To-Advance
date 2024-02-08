import React, {useRef} from 'react';
import ChildForwardRef from './ChildForwardRef';

const ForwardRef = () => {
    let myRef = useRef();
    function updateInput (){
        myRef.current.value = "Farzeen";
        myRef.current.style.backgroundColor = "aqua"
        myRef.current.style.color = "red"
        myRef.current.focus();
    }
  return (
    <>
     <h2>ForwardRef in React Js</h2>
     <ChildForwardRef ref={myRef} />
     <button onClick={() => updateInput()}>Clicked</button>
    </>
  );
}

export default ForwardRef;
