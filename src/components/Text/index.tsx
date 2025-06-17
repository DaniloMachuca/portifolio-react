import { Text as TextStyled } from "./styles";

export type Props = {
  children: string;
  color?: "primary" | "secondary";
  fontSize?: number;
  fontWeight?: number | string;
};

const Text = ({
  children,
  color = "primary",
  fontSize,
  fontWeight = "normal",
}: Props) => (
  <TextStyled fontSize={fontSize} color={color} fontWeight={fontWeight}>
    {children}
  </TextStyled>
);

export default Text;
