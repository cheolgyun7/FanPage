import React, { useState } from "react";
import { Content } from "styles/theme";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const { state } = useLocation();
  const [editContext, setEditContext] = useState(state.context);
  const [modalOpen, setModalOpen] = useState(false);
  const sendModify = () => {
    setModalOpen(true);
  };
  const editSubmit = () => {
    const updatedLetterList = JSON.parse(
      localStorage.getItem("letterList")
    ).map((item) => {
      if (item.id === state.id) {
        return { ...item, context: editContext };
      }
      return item;
    });
    localStorage.setItem("letterList", JSON.stringify(updatedLetterList));
    // 모달 닫기
    setModalOpen(false);
    state.context = editContext;
  };
  const handleEdit = (e) => {
    setEditContext(e.target.value);
  };
  return (
    <>
      <Content>
        닉네임: {state.nickname}
        <br />
        내용 : {state.context}
        <br />
        수신인: {state.selectBox}
        <br />
        <button onClick={sendModify}>수정</button>
        <button>삭제</button>
      </Content>

      {modalOpen && (
        <ModalBackGround onSubmit={editSubmit}>
          <ModalContent>
            <input value={editContext} onChange={handleEdit} />
            <button type="submit">수정하기</button>
          </ModalContent>
        </ModalBackGround>
      )}
    </>
  );
};

export default Detail;

export const ModalBackGround = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;
