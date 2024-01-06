function ClickEvent(){
    let firstName = "Huzaifa";
    function sayHello(){
        // alert("Hello");
        firstName = "Farzeen"
        alert(firstName);
    }
    return (
        <div>
            <h2>{firstName}</h2>
            <button onClick={sayHello}>Click Me</button>
            {/* <button onClick={() => alert("Farzeen")}>Click Me</button> */}
        </div>
    )
}
export default ClickEvent;