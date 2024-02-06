import React, {useContext} from 'react';
import SecondChild from './SecondChild';
import {MyData} from './ContextApiWithHooks';

const FirstChild = () => {
    const {valueData} = useContext(MyData);
  return (
    <>
     <h2>First Child</h2> 
     <h2>Value Data in First Child: {valueData} </h2> 
     <SecondChild />
    </>
  );
}

export default FirstChild;
