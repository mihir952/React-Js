import { React,AppContext } from "./UseContext";
import {useContext} from "react";

function User(){
    const {username}=useContext(AppContext);
    return (
        <div>
           <p1>Username:{username}</p1>
        </div>
    );
}
export default User;