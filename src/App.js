import logo from "./logo.svg";
import "./App.css";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { Drawer, Button, Group, Burger, NavLink } from "@mantine/core";

function App() {
  const [opened, setOpened] = useState(true);
  const theme = useMantineTheme();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        colors: {
          // override dark colors to change them for all components
          dark: [
            "#d5d7e0",
            "#acaebf",
            "#8c8fa3",
            "#666980",
            "#4d4f66",
            "#34354a",
            "#2b2c3d",
            "#1d1e30",
            "#0c0d21",
            "#01010a",
          ],
        },
      }}
    >
      <div className="App">
        <header className="App-header">
          <div className="Banner">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title="test"
            />
            <div>Bio</div>
            <div>Resume</div>
            <div>Research & teaching</div>
            <div>Awards</div>
          </div>
          <Button>Click me!</Button>
          <Drawer
            opened={opened}
            overlayColor={
              theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.gray[2]
            }
            onClose={() => setOpened(false)}
            title="Register"
            size="xl"
            closeOnClickOutside={false}
            className="Drawer"
            trapFocus={false}
            withOverlay={false}
          >
            <NavLink label="With icon" />
          </Drawer>
          <div>Bonjour je suis Nathan un jeune étudiant</div>
        </header>
      </div>
    </MantineProvider>
  );
}

export default App;
