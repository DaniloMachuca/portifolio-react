import styled from "styled-components";

import { Props } from ".";

export const Text = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.color === "primary" ? "#282a35" : "#949494")};
  line-height: 22px;
`;
