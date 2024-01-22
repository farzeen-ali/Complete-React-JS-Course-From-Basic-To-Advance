import React, { Component } from 'react'

class Render extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         dep : "CS"
    //     }
    // }
  render() {
    // console.log("Render Method" , this.state)
    console.log("Render Method" , this.props);
    return (
      <>
       <h2>Render Method | Life Cycle Method</h2> 
       <h3>Hello, {this.props.data} </h3>
       {/* <h3> {this.state.dep} Department </h3>
       <button onClick={() => this.setState({dep: "IT"})}>Update Department</button> */}
      </>
    )
  }
}

export default Render
