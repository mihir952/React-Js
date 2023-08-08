import { useState,createContext,React } from "react";
import Login from "./login";
import User from "./Username";

export const AppContext=createContext(null); 
function UseContext(){
    const [username,setUsername]=useState("");
    return(
        <div>
            <AppContext.Provider value={{username,setUsername}}>
            <Login/><User/>
            </AppContext.Provider>
        </div>
    );
}
export default UseContext;