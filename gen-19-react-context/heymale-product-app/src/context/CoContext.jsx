import { createContext, useState } from "react";

export const CoContext = createContext();

export const CoProvider = ({ children }) => {
  const [dataCo, setDataCo] = useState([]);

  const contextVal = {
    dataCo,
    setDataCo,
  };
  return <CoContext.Provider value={contextVal}>{children}</CoContext.Provider>;
};
