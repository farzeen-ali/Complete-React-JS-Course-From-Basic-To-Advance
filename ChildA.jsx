import React, {useContext} from 'react';
import {MyData} from './ContextApiWithHooks';
const ChildA = () => {
    const {valueData} = useContext(MyData);
  return (
    <>
      <h2>Value Data in Child A: {valueData} </h2> 
    </>
  );
}

export default ChildA;
