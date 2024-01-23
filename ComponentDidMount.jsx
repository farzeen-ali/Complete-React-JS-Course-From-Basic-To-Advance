import React, { Component } from 'react'

class ComponentDidMount extends Component {
    constructor(){
        super();
        console.log("Constructor");
        this.state = {
            name : "Huzaifa"
        }
    }
    componentDidMount(){
        console.log("Component Did Mount")
    }
  render() {
    console.log("Render");
    return (
      <>
        <h2>Component Did Mount Method | Life Cycle Methods</h2>
        <h3>Hello, {this.state.name} </h3>
        <button onClick={() => {this.setState({name:"Farzeen"})}}>Click Me</button>
      </>
    )
  }
}

export default ComponentDidMount
