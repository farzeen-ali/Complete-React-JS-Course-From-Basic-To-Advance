import React, {Component} from "react";
class StateInClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            // name : "Huzaifa"
            name : 0
        }
    }
    updateName(){
        // alert("Hi")
        // this.setState({name : "Farzeen"})
        this.setState({name : this.state.name+1})
    }
    render(){
        return(
            <div>
                <h2>{ this.state.name}</h2>
                <button onClick={()=> this.updateName()}>Click Me</button>
            </div>
        )
    }
}

export default StateInClassComponent;