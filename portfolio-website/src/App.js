import "./App.css";

import React, { useRef } from "react";

import { ScrollProvider } from "./components/ScrollProvider";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import SongCard from "./components/SongCard";
import HorizontalScrollContainer from "./components/HorizontalScrollContainer";
import FullScreenContainer from "./components/FullScreenContainer";

function App() {
  const containerRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

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
            <SongCard img={0} onClick={() => handleSongCardClick(0)}></SongCard>
            <SongCard img={1} onClick={() => handleSongCardClick(1)}></SongCard>
            <SongCard img={2} onClick={() => handleSongCardClick(2)}></SongCard>
            <SongCard img={3} onClick={() => handleSongCardClick(3)}></SongCard>
          </NavBar>
          <HorizontalScrollContainer>
            <FullScreenContainer ref={containerRefs[0]}></FullScreenContainer>
            <FullScreenContainer ref={containerRefs[1]}></FullScreenContainer>
            <FullScreenContainer ref={containerRefs[2]}></FullScreenContainer>
            <FullScreenContainer ref={containerRefs[3]}></FullScreenContainer>
          </HorizontalScrollContainer>
        </div>

        <FooterBar></FooterBar>
      </ScrollProvider>
    </div>
  );
}

export default App;
