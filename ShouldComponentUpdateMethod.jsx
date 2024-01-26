import React, { Component } from 'react'

class ShouldComponentUpdateMethod extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(){
        console.log("Should Component Update", this.state.count)
        // return true;
        if (this.state.count > 5 && this.state.count < 10) {
            return true;
        }
    }
  render() {
    return (
      <>
        <h2>Should Component Update | Life Cycle Method</h2>
        <h3>Count: {this.state.count} </h3>
        <button onClick={()=> {this.setState({count: this.state.count + 1})}}>Click Me</button>
      </>
    )
  }
}

export default ShouldComponentUpdateMethod
