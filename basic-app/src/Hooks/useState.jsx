import { useState } from "react"

   function Counter(){
    const [data,setData]=useState(0);
    const [inputValue,setInputValue]=useState("Mihir");
    function increment(){
        setData(data+1);
    };
    function value(event){
       const newvalue=event.target.value;
       setInputValue(newvalue);
    };
    return(
        <div className="container">
           <h1>{data}</h1>
            <button onClick={increment}>Increment</button>
            <div className="container">
            <input placeholder="enter something..." onChange={value}></input>
            <p1> {inputValue}</p1> 
            </div>
            
        </div>
    )
}
export default Counter;