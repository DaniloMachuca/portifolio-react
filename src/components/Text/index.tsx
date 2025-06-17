import { Text as TextStyled } from "./styles";

export type Props = {
  children: string;
  color?: "primary" | "secondary";
  fontSize?: number;
};

const Text = ({ children, color = "primary", fontSize }: Props) => (
  <TextStyled fontSize={fontSize} color={color}>
    {children}
  </TextStyled>
);

export default Text;
