import {useState} from "react";
function ConditionalRendering(){
    // const [vote, setVote] = useState(false);
    const [age, setAge] = useState(60);

    //Not Recommended
    // if (vote) {
    //     return(
    //         <div>
    //             <h2>You Can vote</h2>
    //         </div>
    //     ) 
    // }
    // else{
    //     return(
    //         <div>
    //             <h2>You Cannot vote</h2>
    //         </div>
    //     ) 
    // }

    return(
        <div>
            {/* { vote && <h2>You Can vote</h2> } */}

            {/* {
                age > 18 ? <h2>Your Age is greater than 18</h2> : <h2>Your Age is less than 18</h2>
            } */}

            {
                age == 10 ? <h2>You are a kid</h2> : age == 20 ? <h2>You are young</h2> : age == 30 ? <h2>Your age is 30</h2> : <h2>You are old</h2>
            }
        </div>
    )
    
}
export default ConditionalRendering;