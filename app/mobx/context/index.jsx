import React, { createContext, useContext } from "react";

import RootStore from "@/mobx/stores";

const StoresContext = createContext();
StoresContext.displayName = "StoresContext";

export const useStores = () => useContext(StoresContext);

export const StoresProvider = ({ children }) => {
  return (
    <StoresContext.Provider value={new RootStore()}>
      {children}
    </StoresContext.Provider>
  );
};
