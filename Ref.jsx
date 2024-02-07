import React, { Component, createRef } from 'react'

class Ref extends Component {
    constructor(){
        super();
        this.myRef = createRef();
    }
    // componentDidMount(){
    //     console.log(this.myRef.current.value = "Farzeen")
    // }
    handle(){
        // console.log(this.myRef)
        console.log(this.myRef.current.value)
        this.myRef.current.style.backgroundColor = "yellow"
        this.myRef.current.style.color = "red"
    }
  render() {
    return (
      <>
        <h2>Ref In Class Component</h2>
        <input type='text' ref={this.myRef} />
        <button onClick={() => this.handle()}>Clicked</button>
      </>
    )
  }
}

export default Ref
