import { createContext, useContext } from "react";

const loadingBarContext = createContext({});

export const LoadingBarProvider = loadingBarContext.Provider;

export const useLoadingBar = () => {
  return useContext(loadingBarContext);
};
