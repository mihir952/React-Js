import { useReducer } from "react";
 function Reducer(){
    const [state,dispatch]=useReducer(reducer,{count:0,showText:true});
    function reducer(state,action){
        switch (action.type){
            case "INCREMENT":
                return {count:state.count+1,showText:state.showText};
            case "toggleShowText":
                return {count:state.count,showText:!state.showText};   
            default:
                return state;     
        }
    };
return(
    <div className="container">
        <h1>UseReducer Hook</h1>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"})
            dispatch({type:"toggleShowText"})
        }}>Increment

        </button>
        {state.showText && <h2>This is a Text</h2>}
    </div>
)
}
export default Reducer;




//without useReducer  *************///
// import { useState } from "react";
// function Reducer(){
//     const [count,setCount]=useState(0);
//     const [showtext,setShowtext]=useState(true);
//     return (
//         <div className="container">
//         <h1>{count}</h1>
//         <button onClick={()=>{
//             setCount(count+1);
//             setShowtext(!showtext);
//         }}>Increment</button>
//         {showtext && <p>This is a text!!</p>}
//         </div>
//     )
// }
// export default Reducer;