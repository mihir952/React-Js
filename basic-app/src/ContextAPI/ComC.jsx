import React from "react";
import { FirstName, LastName } from "./ComA";
import CompB from "./CompB";
function CompC(){
    
    return(
        <div className="container">
            <h1>I am ComponnetC</h1>
            <FirstName.Consumer> 
                {(fname)=>{
                    return (
                        <LastName.Consumer>
                            {(lname)=>{
                                return <h1>My Name is : {fname} {lname}</h1>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
            <CompB/>
            
        </div>
    )
}
export default CompC;