import styled from "styled-components";

export const HeaderBox = styled.header`
  position: relative;
  background-color: #d9d9e7;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;
export const FlexAllbox = styled.div`
  display: flex;
`;

export const Article = styled.article`
  width: 100%;
`;

// img.jsx파일
export const ImgWrapper = styled.div`
  flex: 1;
  overflow: hidden; /* 이미지가 부모 요소를 벗어나는 것을 방지합니다. */
`;

export const ImgFile = styled.img`
  width: auto;
  height: 100vh;
  object-fit: cover;
`;
