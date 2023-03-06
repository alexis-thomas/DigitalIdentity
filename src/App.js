import logo from "./logo.svg";
import "./App.css";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { Drawer, Button, Group, Burger, NavLink } from "@mantine/core";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Achievements from "./Achievements.js";
import Banner from "./Banner";
import Bio from "./Bio";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Research from "./research";
import Resume from "./Resume";
import Articles from "./Articles";
import { Notifications } from "@mantine/notifications";

function App() {
  var w = document.documentElement.clientWidth || window.innerWidth;
  let mobile = w > 480 ? false : true;

  const [opened, setOpened] = useState(!mobile);
  const theme = useMantineTheme();
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        colors: {
          dark: [
            "#d5d7e0",
            "#acaebf",
            "#8c8fa3",
            "#666980",
            "#4d4f66",
            "#34354a",
            "#2b2c3d",
            "#26212b",
            "#0c0d21",
            "#01010a",
          ],
        },
      }}
    >
      <Notifications />
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <div className="burger-container">
              <Burger
                color="white"
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                aria-label="Open navigation"
              ></Burger>
            </div>
            {/* <Banner /> */}
            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              padding="xl"
              size="xs"
              color="#28232d"
              withOverlay={false}
              trapFocus={false}
              closeOnEscape={false}
              lockScroll={false}
            >
              <Banner close={() => setOpened(false)} />
            </Drawer>
            <div className="main-view">
              <Routes>
                <Route exact path="/" element={<Bio />} />
                <Route path="/research" element={<Research />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </div>
          </BrowserRouter>
          <Footer></Footer>
        </header>
      </div>
    </MantineProvider>
  );
}

export default App;
