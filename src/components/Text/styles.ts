import styled from "styled-components";

import { Props } from ".";

export const Text = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  color: ${(props) => (props.color === "primary" ? "#282a35" : "#949494")};
  line-height: 22px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
`;
