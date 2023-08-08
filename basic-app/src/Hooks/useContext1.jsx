import { useState } from "react";
import Login from "./login1";
import User from "./username1";
function Context(){
    const [username,setUsername]=useState("");

    return (
        <div>
            <Login setUsername={setUsername}/> <User username={username}/>
        </div>
    )
}
export default Context;