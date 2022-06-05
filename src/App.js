import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dog } from "./components/Dogs";
function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({});
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const removeCounter = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          setData(response?.data);
        })
        .catch((error) => console.log(error));
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [shouldFetchData]);
  return (
    <div className='App'>
      <h1>Use State tutorial</h1>
      <h1>{`Current counter is ${counter}`}</h1>
      <button onClick={addCounter}>Add counter</button>
      <button onClick={removeCounter}>Remove counter</button>
      <Dog
        data={data}
        handleFetchData={() => setShouldFetchData(!shouldFetchData)}
      />
    </div>
  );
}

export default App;
