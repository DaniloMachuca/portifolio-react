import styled from "styled-components";
import { Theme } from "../../themes/type";

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as Theme).ColorBorder};
  padding: 16px;
`;

export const BtnLink = styled.a`
  color: ${(props) => (props.theme as Theme).ColorBackground};
  font-size: 14px;
  background-color: ${(props) => (props.theme as Theme).ColorBtnBackground};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`;
