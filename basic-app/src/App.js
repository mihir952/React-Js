import "../src/index.css";
import CompA from "./ContextAPI/ComA";
import CompC from "./ContextAPI/ComC";
import UseContext from "./Hooks/UseContext";
import Context from "./Hooks/useContext1";
import EffectTutorial from "./Hooks/useEffect";
import Example from "./Hooks/useEffect";
import Reducer from "./Hooks/useReducer";
import Counter from "./Hooks/useState";
function App(){
  return (
  <div>
    <div className="container">
    <p>Hook</p>

    </div>
        {/* <Counter/> */}  
        {/* <Reducer/> */}
        {/* <Example/> */}
        {/* <EffectTutorial/> */}
        {/* <Context/> */}
        {/* <UseContext/> */}
        <CompA/>
  </div>
)};

export default App;