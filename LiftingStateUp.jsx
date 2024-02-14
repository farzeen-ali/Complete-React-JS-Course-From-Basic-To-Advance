import React from 'react';
import ChildToParent from './ChildToParent';

const LiftingStateUp = () => {
    // let user = "Farzeen";

    function sayHello(n){
        // alert("Hello " + n)
        console.log(n)
    }
  return (
    <>
     <h2>Lifting State Up In React JS</h2> 
     {/* <ChildToParent item ={user} /> */}
     <ChildToParent item={sayHello} />
    </>
  );
}

export default LiftingStateUp;
