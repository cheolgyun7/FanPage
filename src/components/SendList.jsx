import React from "react";

const SendList = ({ letterList }) => {
  return (
    <>
      {letterList.map((list) => {
        return <div key={list.id}>{list.nickname}</div>;
      })}
    </>
  );
};

export default SendList;
