import React from "react";
import { SendForm } from "styles/theme";
import styled from "styled-components";

const SendPage = ({ newMessage }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    const nickname = e.target.nickname.value;
    const context = e.target.context.value;
    const selectBox = e.target.select.value;

    newMessage({
      id: crypto.randomUUID(),
      nickname,
      context,
      selectBox,
    });
    e.target.reset();
  };
  return (
    <>
      <SendForm onSubmit={formSubmit}>
        <Section>
          <Label>닉네임 : </Label>
          <input type="text" name="nickname" />
        </Section>
        <Section>
          <Label>내용 : </Label>
          <Textarea name="context" />
        </Section>
        <Section>
          <Label>수신인 : </Label>
          <select name="select">
            <option value="카리나">카리나</option>
            <option value="윈터">윈터</option>
            <option value="지젤">지젤</option>
            <option value="닝닝">닝닝</option>
          </select>
          <button type="submit">보내기</button>
        </Section>
      </SendForm>
    </>
  );
};

export default SendPage;

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