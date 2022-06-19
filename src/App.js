import React, { useState, useRef } from "react";

// IMPORT DATA
import data from "./data";
//STYLE
import "./style/app.scss";

// ADD COMPONENTS
import SongInfo from "./components/SongInfo";
import PlaySong from "./components/PlaySong";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  //REF
  const audioRef = useRef(null);
  //State

  const [songsData, setSongsData] = useState(data());
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [isPlay, setIsPlay] = useState(false);
  const [songsTimer, setSongsTimer] = useState({
    duration: 0,
    currentTime: 0,
  });
  const [library, setLibrary] = useState(false);
  return (
    <div className={`app ${library ? "library-active" : ""}`}>
      <Nav library={library} setLibrary={setLibrary} />
      <Library
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songsData={songsData}
        setSongsData={setSongsData}
        audioRef={audioRef}
        isPlay={isPlay}
        library={library}
        setLibrary={setLibrary}
      />
      <SongInfo currentSong={currentSong} songsData={songsData} />
      <PlaySong
        audioRef={audioRef}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songsData={songsData}
        setSongsData={setSongsData}
        songsTimer={songsTimer}
        setSongsTimer={setSongsTimer}
      />
    </div>
  );
}

export default App;
