import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextStore = ({ children }) => {
  // state for color extraction
  const [bgColor, setBgColor] = useState("rgb(0,0,0)");

  return (
    <AppContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextStore;
