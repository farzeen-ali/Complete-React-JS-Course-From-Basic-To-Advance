import React from 'react'

function PassFunctionAsProps(props) {
  return (
    <div>
      <h2>Pass Function as a props</h2>
      <button onClick={props.data}>Get Your Data</button>
      {/* <button onClick={() => props.data()}>Get Your Data</button> */}
    </div>
  )
}

export default PassFunctionAsProps
