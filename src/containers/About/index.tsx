import Title from "../../components/Title";
import Text from "../../components/Text";
import { GithubSection } from "./styles";

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Text>
      Sou Danilo Machuca, desenvolvedor front-end com foco em aplicações web
      modernas e responsivas. Tenho experiência com tecnologias como JavaScript,
      TypeScript e React, além de domínio em ferramentas de automação e
      pré-processadores como Gulp, Grunt, Sass e LESS.
    </Text>
    <Text>
      Atualmente curso Ciência da Computação na UNIP e complementando minha
      formação com especialização em desenvolvimento frontend pela EBAC. Busco
      constantemente aprimorar minhas habilidades técnicas e aplicar boas
      práticas de desenvolvimento para entregar soluções eficientes, acessíveis
      e de fácil manutenção.
    </Text>
    <Text>
      Estou aberto a oportunidades profissionais em projetos desafiadores que
      envolvam desenvolvimento de interfaces, componentização, consumo de APIs
      REST e performance no front-end.
    </Text>
    <GithubSection>
      <img
        src="https://github-readme-stats.vercel.app/api?username=DaniloMachuca&show_icons=true&theme=dracula"
        alt="status do github"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=DaniloMachuca&layout=compact&theme=dracula"
        alt="status do github"
      />
    </GithubSection>
  </section>
);

export default About;
