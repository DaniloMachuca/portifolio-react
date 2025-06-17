import Title from "../Title";
import Text from "../Text";
import { Card, BtnLink } from "./styles";

type Props = {
  id?: number;
  name?: string;
  html_url?: string;
  description?: string;
};

const Project = (props: Props) => {
  return (
    <Card>
      {props.name && <Title>{props.name}</Title>}
      {props.description && <Text color="secondary">{props.description}</Text>}
      <BtnLink href={props.html_url}>Visualizar</BtnLink>
    </Card>
  );
};

export default Project;
