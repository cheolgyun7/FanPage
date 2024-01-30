import React from "react";
import styled from "styled-components";

const MemberList = ({ handleSelectedMember }) => {
  const handleMemberClick = (memberName) => {
    handleSelectedMember(memberName);
  };
  return (
    <div>
      <ListUl>
        <ListLi onClick={() => handleMemberClick("")}>All</ListLi>
        <ListLi onClick={() => handleMemberClick("카리나")}>카리나</ListLi>
        <ListLi onClick={() => handleMemberClick("윈터")}>윈터</ListLi>
        <ListLi onClick={() => handleMemberClick("지젤")}>지젤</ListLi>
        <ListLi onClick={() => handleMemberClick("닝닝")}>닝닝</ListLi>
      </ListUl>
    </div>
  );
};

export default MemberList;

export const ListUl = styled.ul`
  display: flex;
  background-color: beige;
`;
export const ListLi = styled.li`
  width: 20%;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
`;
