import React, { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const removeCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className='App'>
      <h1>{`Current counter is ${counter}`}</h1>
      <button onClick={addCounter}>Add counter</button>
      <button onClick={removeCounter}>Remove counter</button>
    </div>
  );
}

export default App;
