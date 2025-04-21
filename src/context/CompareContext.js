import React, { createContext, useState } from 'react';

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (product) => {
    setCompareList((prev) => [...prev, product]);
  };

  const removeFromCompare = (product) => {
    setCompareList((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
};