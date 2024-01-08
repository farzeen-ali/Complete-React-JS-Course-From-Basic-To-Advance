import React, {useState} from "react";

function StateInFunctionalComponent(){
    // const [name, setName] = useState("Huzaifa");
    const [name, setName] = useState(0);
    function updateName(){
        // setName("Farzeen Ali");
        setName(name+1);
    }
    console.log("Rendering")
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={updateName}>Click Me</button>
        </div>
    )
}
export default StateInFunctionalComponent;