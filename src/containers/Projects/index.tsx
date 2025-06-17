import { useEffect, useState } from "react";
import Project from "../../components/Project";
import Title from "../../components/Title";

import { List } from "./styles";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/DaniloMachuca/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      });
  }, []);

  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <List>
        {repos.map(({ id, name, html_url, description }) => (
          <li key={id}>
            <Project
              name={name}
              html_url={html_url}
              description={description}
            />
          </li>
        ))}
      </List>
    </section>
  );
};

export default Projects;
