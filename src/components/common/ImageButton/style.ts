import styled from "styled-components";

export const ImgBtnContainer = styled.button<{
  width: number;
  height: number;
}>`
  background-color: #fff;
  border: none;
  padding: 0;
  img {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    object-fit: cover;
  }
`;
