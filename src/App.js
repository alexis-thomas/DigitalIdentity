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
import Projects from "./Projects";
import {Helmet} from "react-helmet";
import PrivacyPolicy from "./aura/PrivacyPolicy";
import TermsOfService from "./aura/TermsOfService";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alexis Thomas</title>
        <link rel="canonical" href="https://alexisthomas.fr" />
        <meta name="description" content="I am a Mines Paris graduate and a Software Development Engineer at Amazon, where I have the opportunity to work on a wide range of challenging projects.
My passion for mathematics, computer science, and software development started during my studies at Mines Paris, where I had the chance to take advanced courses in these fields. Since then, I have developed full-stack development skills in Python, Java, and TypeScript, and gained project management experience in large companies.
What fascinates me most these days are cloud technologies and especially AWS. I enjoy working on complex cloud architectures and leveraging cloud services to build innovative solutions that solve real-world problems.
In my free time, I enjoy learning about emerging technologies and exploring new ideas. I'm always looking for ways to improve my skills and stay up-to-date with the latest trends in software development. Among my tech projects, I recently built prototypes for a social network website, a clothes delivery mobile app and more importantly, Giftruly - a gift recommendation website and mobile app.
Thank you for visiting my website. I look forward to connecting with you soon!" />
      </Helmet>
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
              withOverlay={mobile}
              overlayProps={{ opacity: 0 }}
              trapFocus={false}
              closeOnEscape={false}
              lockScroll={false}
            >
              <Banner close={() => setOpened(false)} />
            </Drawer>
            <div className="main-view">
              <Routes>
                <Route exact path="/" element={<Bio />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/research" element={<Research />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/aura/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/aura/termsofservice" element={<TermsOfService />} />
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
