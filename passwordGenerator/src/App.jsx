import { useState, useRef, useMemo } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [characterAllow, setCharacterAllow] = useState(false);
  const [numberAllow, setNumberAllow] = useState(false);

  const copyItem = useRef(null);

  const copyclipBooard = () => {
    copyItem.current?.select();
    copyItem.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  };

  const passwordGenerator = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz";

    if (characterAllow) {
      str += "@!#$%&?[]{}";
    } else if (numberAllow) {
      str += "0123456789";
    }
    let selectStr = "";

    for (let i = 1; i <= length; i++) {
      let no = Math.floor(Math.random() * str.length + 1);
      selectStr += str.charAt(no);
    }
    setPassword(selectStr);
  };

  useMemo(() => {
    passwordGenerator();
  }, [length, setPassword, numberAllow, characterAllow]);

  // useEffect(() => {
  //   passwordGenerator();
  // }, [length, characterAllow, numberAllow, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={copyItem}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={() => {
            copyclipBooard();
          }}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={() => {
              setNumberAllow((prevState) => !prevState);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllow}
            id="characterInput"
            onChange={() => {
              setCharacterAllow((prevState) => !prevState);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
