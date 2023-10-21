import React, { useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [lightTheme, setLightTheme] = useState("");
  const [darkTheme, setDarkTheme] = useState("");

  return (
    <ThemeProvider
      value={{ lightTheme, setLightTheme, darkTheme, setDarkTheme }}
    >
      <div
        className={`flex flex-wrap min-h-screen items-center ${lightTheme} ${darkTheme}`}
      >
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
            {mode}
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
