import React, { createContext } from "react";
import CompC from "./ComC";
const FirstName=createContext('');
const LastName=createContext('');

function CompA(){
    return(
        <div>
            {/* <h1>I am Componnet A</h1> */}
            <FirstName.Provider value={"mihir"}>
                <LastName.Provider value={"Kumar"}>
                <CompC/>
                </LastName.Provider>
            </FirstName.Provider>
        </div>
    )
}
export default CompA;
export {FirstName,LastName};