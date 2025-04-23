import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from "./components/Navbar";
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import Certificate from './components/Certificate';
import styled from "styled-components";
import certificate1 from './images/12216045_MOOC_4CPM358Certificate_page-0001.jpg';
import certificate2 from './images/NPTEL certificate_page-0001.jpg';
import certificate3 from './images/BI-20240710-5640320.jpg'; // Import Certificate 3

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg}; /* Theme-based background */
  color: ${({ theme }) => theme.text_primary}; /* Theme-based text color */
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const certificates = [
  { image: certificate1, title: 'Certificate 1' },
  { image: certificate2, title: 'Certificate 2' },
  { image: certificate3, title: 'Certificate 3' }, // Use imported image
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> {/* Theme toggles here */}
      <Router>
        <Navbar toggleTheme={toggleTheme} /> {/* Pass the toggleTheme function to Navbar */}
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Certificate certificates={certificates} /> {/* Moved Certificate above Projects */}
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
