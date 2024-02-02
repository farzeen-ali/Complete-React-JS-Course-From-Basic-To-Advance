import React, { useEffect } from 'react'

function UseEffectWithProps(props) {
    useEffect(() => {
        console.log("useEffect Hook With Props", props)
    })
  return (
    <>
     <h2>useEffect Hook With Props</h2> 
     <h3>Count: {props.data} </h3>
    </>
  )
}

export default UseEffectWithProps
