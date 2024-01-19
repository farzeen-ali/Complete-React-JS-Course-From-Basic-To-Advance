import React, { useState } from 'react'

function FormValidation() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [err, setErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginForm(e){
        if(email.length < 3 || password.length < 5){
            alert("Bhai Sahi se Form Fill Krdo Please")
        }
        else{
            console.log(email)
            console.log(password)
            alert("Thanks")
        }
        e.preventDefault();
    }

    function emailHandler(e){
        // console.log(e.target.value.length)
        let element = e.target.value;
        if(element.length < 3){
            // console.log("Minimum 3 letters required!!!")
            setErr(true);
        }
        else{
            setErr(false);
        }
        setEmail(element)
    }

    function passwordHandler(e){
        // console.log(e.target.value.length)
        let element = e.target.value;
        if(element.length < 5){
            // console.log("Minimum 3 letters required!!!")
            setPassErr(true);
        }
        else{
            setPassErr(false);
        }
        setPassword(element)
    }
  return (
    <>
      <h2>Form Validation In React JS</h2>
      <form onSubmit={loginForm}>
        <input type='text' placeholder='Enter Your Email' onChange={emailHandler}></input> {err ? <span>Minimum 3 letters required!!!</span> : <span></span> }
        <br></br>
        <br></br>
        <input type='text' placeholder='Enter Your Password' onChange={passwordHandler}></input>{passErr ? <span>Minimum 5 letters required!!!</span> : <span></span> }
        <br></br>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormValidation
