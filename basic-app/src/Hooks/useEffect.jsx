import { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial(){
    const [data,setData]=useState([]);
    useEffect(()=>{
       axios.get("https://reqres.in/api/users?page=2%22").then((response)=>{
            // console.log(response.data.data[1].email);
            setData(response.data.data[1].email);
            console.log("apli called");
       });
      
    },[])
    return (
        <div>
            <h1>UseEffect Hook</h1>
            <h3>Details of 3rd employee:{data}</h3>
        </div>
    )
}
export default EffectTutorial;


































// import React, { useState, useEffect } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// export default Example;


