import "../src/index.css";
import Reducer from "./Hooks/useReducer";
import Counter from "./Hooks/useState";
function App(){
  return (
  <div>
    <div className="container">
    <p>Hook</p>

    </div>
        {/* <Counter/> */}
        <Reducer/>
  </div>
)};

export default App;