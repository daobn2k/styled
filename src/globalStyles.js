import styled, { createGlobalStyle } from "styled-components";
import { Button } from "antd";
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:boder-box;
    margin: 0;
    padding: 0;
    font-family:sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const ButtonStyled = styled(Button)`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "5px 20px")};
  color: #fff;
  font-size: ${({ fonyBig }) => (fonyBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
