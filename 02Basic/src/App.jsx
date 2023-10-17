import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(30);

  const counter = () => {
    setCount(count + 1);
  };
  const counterDecreas = () => {
    if (count <= 0) {
      console.log("minous value not accepted");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Counter value : {count}</h1>
      <button onClick={counter}>Increas count</button>

      <h1>Counter value : {count}</h1>
      <button onClick={counterDecreas}>Decreases count</button>
    </>
  );
}

export default App;
