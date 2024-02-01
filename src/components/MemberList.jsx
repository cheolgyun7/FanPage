import { useLetterContext } from "context/Context";
import React from "react";
import styled from "styled-components";

const members = ["", "Karina", "Winter", "Giselle", "Ningning"];
const MemberList = () => {
  const { setselectedMember, handleMember } = useLetterContext();

  const handleMemberClick = (memberName) => {
    handleMember(memberName);
  };

  return (
    <div>
      <ListUl>
        {members.map((member) => (
          <ListLi
            key={member}
            onClick={() => handleMemberClick(member)}
            className={setselectedMember === member ? "selected" : ""}
          >
            {member || "All"}
          </ListLi>
        ))}
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
  &:hover {
    background-color: #f0f0f0;
  }
  &.selected {
    background-color: #ccc;
  }
`;