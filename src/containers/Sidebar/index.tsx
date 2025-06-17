import Avatar from "../../components/Avatar";
import Title from "../../components/Title";
import Text from "../../components/Text";

import { Description, BtnTheme, SidebarContainer } from "./styles";

type Props = {
  handleTheme: () => void;
};

const Sidebar = (Props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Danilo Machuca</Title>
      <Text color="secondary" fontSize={16}>
        DaniloMachuca
      </Text>
      <Description>
        <Text fontSize={12}>Desenvolvedor Front-End</Text>
      </Description>
      <Description>
        <Text fontWeight={"bold"} fontSize={12}>
          Email para contato:
        </Text>
        <Text fontSize={12}>danilo.machuca.dev@gmail.com</Text>
      </Description>
      <BtnTheme onClick={Props.handleTheme}>Trocar Tema</BtnTheme>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
