import { AppContext } from "./UseContext";
import { React,useContext } from "react";
function Login(){
    const {setUsername}=useContext(AppContext)
    return (
        <div>
           <input onChange={(event)=>{
                setUsername(event.target.value);
           }}>

           </input>
        </div>
    )
}
export default Login;