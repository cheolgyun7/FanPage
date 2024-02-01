// LetterContext.js
import React, { createContext, useContext, useState } from "react";

const LetterContext = createContext();

export const useLetterContext = () => useContext(LetterContext);

export const LetterProvider = ({ children }) => {
  const [letterList, setLetterList] = useState([]);
  const [setselectedMember, setSetselectedMember] = useState("");
  const handleMember = (membername) => {
    setSetselectedMember(membername);
  };
  const newMessage = (todo) => {
    const updatedList = [todo, ...letterList];
    setLetterList(updatedList);
    localStorage.setItem("letterList", JSON.stringify(updatedList));
  };

  return (
    <LetterContext.Provider
      value={{ letterList, newMessage, setselectedMember, handleMember }}
    >
      {children}
    </LetterContext.Provider>
  );
};
