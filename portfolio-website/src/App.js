import "./App.css";

import React, { useRef } from "react";

import { ScrollProvider } from "./components/ScrollProvider";
import FooterBar from "./components/FooterBar";
import SongCard from "./components/SongCard";
import HorizontalScrollContainer from "./components/HorizontalScrollContainer";

function App() {
  const endRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <ScrollProvider>
          <HorizontalScrollContainer>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <div ref={endRef}>
              <SongCard></SongCard>
            </div>
          </HorizontalScrollContainer>
          <button
            onClick={() =>
              endRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            go to end
          </button>

          <FooterBar></FooterBar>
        </ScrollProvider>
      </header>
    </div>
  );
}

export default App;
