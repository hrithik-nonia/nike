import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextStore = ({ children }) => {
  // state for color extraction
  const [bgColor, setBgColor] = useState("rgb(0,0,0)");

  // state for product fillteing by by there title like(air jorden/ air force  etc...)
  const [productTitle, setProductTitle] = useState(null);

  return (
    <AppContext.Provider
      value={{ bgColor, setBgColor, setProductTitle, productTitle }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextStore;
