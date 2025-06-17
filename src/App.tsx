import { ThemeProvider } from "styled-components";

import GlobalStyle, { Container } from "./styles";
import Sidebar from "./containers/Sidebar";
import About from "./containers/About";
import Projects from "./containers/Projects";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  function handleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar handleTheme={handleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
