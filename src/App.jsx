import { useState } from 'react'
import './index.css'


function App() {
  
let[counter,setCounter]= useState(1);

const addValue=()=>{
  setCounter(counter+1)
}
const removeValue=()=>{
  setCounter(counter-1);
}
const resetValue= () => {
 setCounter(0);
};

  return (
    <>
     <div className="app-container">
 <h1>React Counter App</h1>
 <h2 style={{ color: counter < 0 ? "red" : "black" }}> counter value: {counter}</h2>
    
  <button className="add-btn" onClick={addValue}>add value </button>
  
  <button  className="remove-btn"onClick={removeValue}>remove value</button>
  
        <button className="reset-btn" onClick={resetValue}>Reset</button>

</div>
    </>
  )
}

export default App
