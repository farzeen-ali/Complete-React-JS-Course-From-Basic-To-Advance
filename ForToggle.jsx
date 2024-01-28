import React, { Component } from 'react'

class ForToggle extends Component {
    componentWillUnmount(){
        alert("Component Will Unmount")
    }
  render() {
    return (
      <>
        <h3>Me Toggle Component Hoon</h3>
      </>
    )
  }
}

export default ForToggle
