import React from "react"
import './App.css';

function App() {
  const[counter,setcounter]=React.useState(0);
    return (
        <div className='parent'>
            <h1>{counter}</h1>
            <div>
                <button className="btn"
                        onClick={()=>{setcounter(counter+1)}}>
                        Increment + 
                </button>
                <button className="btn"
                        onClick={()=>{setcounter(counter-1)}}>
                        Decrement - 
                </button>
            </div>
        </div>
  );
}

export default App;
