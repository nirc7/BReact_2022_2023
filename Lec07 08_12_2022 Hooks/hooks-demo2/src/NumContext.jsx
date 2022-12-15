import React, { createContext, useContext, useState } from 'react';

export const NumContext = createContext();

export default function NumContextProvider(props) {
  const [num, setNum] = useState(0);

  const minusNum = () => {
    setNum(prevN => prevN - 1);
  }

  return (
    <NumContext.Provider value={{ num, setNum, minusNum }}>
      {props.children}
    </NumContext.Provider>
  )
}
