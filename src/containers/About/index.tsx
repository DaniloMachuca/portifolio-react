import Title from "../../components/Title";
import Text from "../../components/Text";
import { GithubSection } from "./styles";

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam
      a, dolorem at eaque molestiae illum, eos commodi hic minima magni sapiente
      eligendi saepe autem cum incidunt libero iste voluptatum.
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
