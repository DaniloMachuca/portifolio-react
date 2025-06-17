import Avatar from "../../components/Avatar";
import Title from "../../components/Title";
import Text from "../../components/Text";

import { Description, BtnTheme, SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Danilo Machuca</Title>
      <Text color="secondary" fontSize={16}>
        DaniloMachuca
      </Text>
      <Description color="primary" fontSize={12}>
        Desenvolvedor front-end
      </Description>
      <BtnTheme>Trocar Tema</BtnTheme>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
