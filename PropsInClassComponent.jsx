import React, {Component} from "react";
class PropsInClassComponent extends Component{
    render(){
        return(
            <div style={{backgroundColor : "aqua"}}>
                <h2>Hello {this.props.name}</h2>
                {/* <h3>Email: {this.props.email}</h3> */}
            </div>
        )
    }
}

export default PropsInClassComponent;