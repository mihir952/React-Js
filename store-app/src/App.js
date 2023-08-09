import React from 'react';
import "./App.css";
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { incNumber ,decNumber} from './actions';
function App() {
  const mystate=useSelector((state)=>state.changetheNumber);
  const dispatch=useDispatch();
  return (
   <div className='container'>
    <h1>Increment/Decrement Counter</h1>
    <h4>Using React and Redux</h4>

    <div className='quantity'>
      <a className='quantity_minus' title='Decrement'  onClick={()=>dispatch(decNumber())}>
        <span>-</span></a>
      <input name='quantity' type="text" className='quantity_input' value={mystate}/>
      <a className='quantity_plus' title='Increment' onClick={()=>dispatch(incNumber())}><span>+</span></a>

      </div>    
   </div>
  );
}

export default App;
