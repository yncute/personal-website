import "./App.css";

import React, { useRef } from "react";

import { ScrollProvider } from "./components/ScrollProvider";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import SongCard from "./components/SongCard";
import HorizontalScrollContainer from "./components/HorizontalScrollContainer";
import FullScreenContainer from "./components/FullScreenContainer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const containerRefs = [
    useRef(null),
    // useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const pages = [
    <HomePage></HomePage>,
    // <AboutPage></AboutPage>,
    <ProjectsPage></ProjectsPage>,
    <SkillsPage></SkillsPage>,
    <EducationPage></EducationPage>,
    <ContactPage></ContactPage>,
  ];

  const songCards = [0, 1, 2, 3, 4];

  //Scroll to the container at index
  const handleSongCardClick = (index) => {
    const container = containerRefs[index].current;
    const offset = window.innerWidth * 0.06;
    const scrollX =
      container.getBoundingClientRect().left + window.scrollX - offset;

    window.scrollTo({
      left: scrollX,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-start justify-start h-full w-full">
      <ScrollProvider>
        <div className="flex flex-row">
          <NavBar>
            {songCards.map((index) => (
              <SongCard
                img={index}
                key={index}
                onClick={() => handleSongCardClick(index)}
              ></SongCard>
            ))}
          </NavBar>
          <HorizontalScrollContainer>
            {pages.map((page, index) => (
              <FullScreenContainer ref={containerRefs[index]}>
                {page}
              </FullScreenContainer>
            ))}
          </HorizontalScrollContainer>
        </div>

        <FooterBar></FooterBar>
      </ScrollProvider>
    </div>
  );
}

export default App;
