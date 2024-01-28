import React, { useState } from "react";
import { Content, SendForm } from "styles/theme";
import styled from "styled-components";

const Home = () => {
  const [nickname, setNickname] = useState("");
  const [context, setContext] = useState("");
  const [receiver, setReceiver] = useState(""); // 추가: 수신인 상태
  const [letterList, setLetterList] = useState([]);

  const formSubmit = (next) => {
    next.preventDefault();
    const newMessage = {
      nickname,
      context,
      receiver,
    };
    setLetterList([...letterList, newMessage]);
    console.log(letterList);
    console.log(newMessage);
    console.log();
  };
  return (
    <Content>
      <SendForm>
        <Section>
          <Label>닉네임 : </Label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </Section>
        <Section>
          <Label>내용 : </Label>
          <Textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
        </Section>
        <Section>
          <Label>수신인 : </Label>
          <select
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          >
            <option value="카리나">카리나</option>
            <option value="윈터">윈터</option>
            <option value="지젤">지젤</option>
            <option value="닝닝">닝닝</option>
          </select>
          <button type="submit" onClick={formSubmit}>
            보내기
          </button>
        </Section>
      </SendForm>
    </Content>
  );
};

export default Home;

export const Section = styled.section`
  display: flex;
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  width: 5rem;
  display: flex;
  align-items: center;
`;
export const Textarea = styled.textarea`
  height: 6rem;
  resize: none;
`;
