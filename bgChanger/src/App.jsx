import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("indianred");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex-wrap flex justify-center gap-3 shadow-lg bg-slate-200 px-10 py-3 rounded-3xl">
          <button
            className="outline-none px-4 py-1 roundend-full text-white shadow-lg rounded-3xl "
            style={{ backgroundColor: "indianred" }}
            onClick={(e) => {
              setColor(e.currentTarget.innerText);
            }}
          >
            Indianred
          </button>
          <button
            className="outline-none px-3 py-1 roundend-full text-white shadow-lg rounded-3xl "
            style={{ backgroundColor: "maroon" }}
            onClick={(e) => {
              setColor(e.currentTarget.innerText);
            }}
          >
            Maroon
          </button>
          <button
            className="outline-none px-4 py-1 roundend-full text-white shadow-lg rounded-3xl "
            style={{ backgroundColor: "palevioletred" }}
            onClick={(e) => {
              setColor(e.currentTarget.innerText);
            }}
          >
            Palevioletred
          </button>
          <button
            className="outline-none px-4 py-1 roundend-full text-white shadow-lg rounded-3xl"
            style={{ backgroundColor: "orange" }}
            onClick={(e) => {
              setColor(e.currentTarget.innerText);
            }}
          >
            Orange
          </button>

          <button
            className="outline-none px-4 py-1 roundend-full text-white shadow-lg rounded-3xl"
            style={{ backgroundColor: "skyblue" }}
            onClick={(e) => {
              setColor(e.currentTarget.innerText);
            }}
          >
            Skyblue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
