import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, stateCount] = useState(0);

  function counterfun() {
    stateCount((prev) => prev + 1);
  }
  
  return (
    <div>
      <h3>Counter : {count}</h3>
      <br />
      <button onClick={counterfun}> Incremnet</button>
    </div>

  );
}

export default App;
