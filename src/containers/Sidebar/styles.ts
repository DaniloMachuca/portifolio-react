import styled from "styled-components";
import { Theme } from "../../themes/type";

export const Description = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const BtnTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => (props.theme as Theme).ColorBackground};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.theme as Theme).ColorPrimary};
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`;
