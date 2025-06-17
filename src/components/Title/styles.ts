import styled from "styled-components";

import { Props } from ".";
import { Theme } from "../../themes/type";

export const Title = styled.h3<Props>`
  color: ${(props) => (props.theme as Theme).ColorPrimary};
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")}px;
  font-weight: bold;
  margin-bottom: 16px;
`;
