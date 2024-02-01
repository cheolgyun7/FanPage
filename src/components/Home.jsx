import React, { useEffect, useState } from "react";
import { Content } from "styles/theme";
import SendPage from "./SendPage";
import SendList from "./SendList";
import MemberList from "./MemberList";

const Home = () => {
  const [letterList, setLetterList] = useState([]);
  const [selectMember, setSelectMember] = useState("");
  const handleSelectedMember = (memberName) => {
    setSelectMember(memberName);
  };
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
      <MemberList handleSelectedMember={handleSelectedMember} />
      <SendPage newMessage={newMessage} />
      <SendList selectMember={selectMember} letterList={letterList} />
    </Content>
  );
};

export default Home;
