import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const countUp =()=>{
    setCount(count+1);
  }
  return (
    <div className="App">
      <h1>hello!!</h1>
      <h2>{count}</h2>
      <button onClick={()=>countUp()}>+</button>
    </div>
  );
}

export default App;
