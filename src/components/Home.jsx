import React, { useEffect, useState } from "react";
import { Content } from "styles/theme";
import SendPage from "./SendPage";
import SendList from "./SendList";

const Home = () => {
  const [letterList, setLetterList] = useState([]);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("letterList"));
    if (list) {
      setLetterList(list);
    }
  }, []);

  const newMessage = (todo) => {
    // 업데이트된 letterList를 사용하여 localStorage에 저장
    const updatedList = [todo, ...letterList];
    setLetterList(updatedList);
    localStorage.setItem("letterList", JSON.stringify(updatedList));
  };

  return (
    <Content>
      <SendPage newMessage={newMessage} />
      <SendList letterList={letterList} />
    </Content>
  );
};

export default Home;
