import React, { createContext } from "react";
import CompC from "./ComC";
const FirstName = createContext("");
const LastName = createContext("");
// const Company = createContext("");

function CompA() {
  return (
    <div>
      {/* <h1>I am Componnet A</h1> */}
      <FirstName.Provider value={"mihir"}>
        <LastName.Provider value={"Kumar"}>  
            <CompC />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}
export default CompA;
export { FirstName, LastName};

//to  create Context Api 3 steps are there
// 1.CreateContext;
// 2.Use Provider and export
// 3.With the help of Consumer return the value and add a callback function
