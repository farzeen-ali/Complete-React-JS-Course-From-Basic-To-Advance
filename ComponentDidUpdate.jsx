import React, { Component } from 'react'

class ComponentDidUpdate extends Component {
    constructor(){
        super();
        // console.log("Constructor")
        this.state = {
            count : 0
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update " , prevState, this.state.count)
        // if (prevState.count === this.state.count) {
        //     alert("Counts Are Equal")
        // }
        // this.setState({count : this.state.count + 1}) ---> error (infinite loop)
        if (this.state.count < 5 ) {
            this.setState({count : this.state.count + 1})
        }
    }
  render() {
    // console.log("Render")
    return (
      <>
        <h2>Component Did Update | Life Cycle Method</h2>
        <h3>Hello, {this.state.count} </h3>
        <button onClick={() => {this.setState({count : 1})}}>Click Me</button>
      </>
    )
  }
}

export default ComponentDidUpdate
