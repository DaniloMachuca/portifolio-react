import styled from "styled-components";
import { Theme } from "../../themes/type";

import { Props } from ".";

export const Text = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  color: ${(props) =>
    props.color === "primary"
      ? (props.theme as Theme).ColorPrimary
      : (props.theme as Theme).ColorSecondary};
  line-height: 22px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
`;
