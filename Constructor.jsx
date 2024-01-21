import React, { Component } from 'react'

class Constructor extends Component {
    constructor(){
        super();
        // console.log("Me Constructor Hoon")
        this.state = {
            name : "Farzeen Ali"
        }
    }
  render() {
    // console.log("Me Render Hoon")
    return (
      <>
       <h2>Constructor | Life Cycle Method</h2> 
       <h3>Hello, {this.state.name} </h3>
      </>
    )
  }
}

export default Constructor
