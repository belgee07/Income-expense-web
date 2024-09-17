"use client";
import { createContext, useContext } from "react";

const AncestorContext = createContext(null);

export const AncestorProvider = ({ children }) => {
  const ancertor = "Knife";

  return (
    <AncestorContext.Provider value={{ ancertor }}>
      {children}
    </AncestorContext.Provider>
  );
};

export const useAncestor = () => {
  const ancestor = useContext(AncestorContext);
  return ancestor;
};
