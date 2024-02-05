import React, { memo } from 'react';

const ExampleUseCallbackHook = (props) => {
    console.log("Hello Im Child Component", props)
  return (
    <>
     <h3>Item: {props.item} </h3> 
    </>
  );
}

export default memo(ExampleUseCallbackHook);
