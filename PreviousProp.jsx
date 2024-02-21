import React, {useEffect, useRef} from 'react';

const PreviousProp = (prop) => {
    let prevValue = useRef();
    useEffect(() => {
        prevValue.current = prop.item
    })
    const prevProp = prevValue.current;
  return (
    <>
     <h2>Previous Prop in React JS</h2> 
     <h3>Current Value: {prop.item} </h3>
     <h3>Previous Value: {prevProp} </h3>
    </>
  );
}

export default PreviousProp;
