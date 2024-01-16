import React from 'react'

function New(props) {
  return (
    <div>
      <h2>New Component</h2>
      <button onClick={props.data}>Get Your Data</button>
    </div>
  )
}

export default New
