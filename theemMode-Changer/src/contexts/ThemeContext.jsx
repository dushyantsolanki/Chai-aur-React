import { createContext } from "react";

export const ThemeContext = createContext({mode:"lightMode"});

export const ThemeProvider = ThemeContext.Provider;
