import React, {forwardRef} from 'react';

const ChildForwardRef = (props, ref) => {
  return (
    <>
     <h2>Child Forward Ref</h2>
     <input type='text' ref={ref} /> 
    </>
  );
}

export default forwardRef(ChildForwardRef);
