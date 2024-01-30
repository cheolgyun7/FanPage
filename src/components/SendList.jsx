import React from "react";
import styled from "styled-components";

const SendList = ({ letterList, selectMember }) => {
  // letterList가 비어있는 경우 스팬 태그 반환
  if (letterList.length === 0) {
    return <span>letterList가 비어 있습니다.</span>;
  }
  console.log(selectMember);
  const filteredList = selectMember
    ? letterList.filter((item) => item.selectBox === selectMember)
    : letterList;

  return (
    <>
      <CardBox>
        {filteredList.length > 0 ? (
          filteredList.map((list) => {
            return (
              <Card key={list.id}>
                <Nickname>{list.nickname}</Nickname>
                <CardContext>{list.context}</CardContext>
                <SelectBox>{list.selectBox}</SelectBox>
              </Card>
            );
          })
        ) : (
          <span>df</span>
        )}
      </CardBox>
    </>
  );
};
export default SendList;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #2a1215;
`;
export const Card = styled.section`
  width: 28%;
  margin: 2%;
  padding: 0.5%;
  background-color: #de875f;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  &:hover {
    transition: all 0.4s;
    transform: scale(1.1);
    border: 1px solid black;
  }
`;

export const Nickname = styled.h4`
  text-align: center;
`;

export const CardContext = styled.p`
  margin: 1rem 0;
  border: 1px solid black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SelectBox = styled.span``;
