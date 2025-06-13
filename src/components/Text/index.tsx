import { Text as TextStyled } from "./styles";

export type Props = {
  children: string;
  color?: "primary" | "secondary";
};

const Text = ({ children, color = "primary" }: Props) => (
  <TextStyled color={color}>{children}</TextStyled>
);

export default Text;
