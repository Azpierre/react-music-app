import React from "react";

//ADD COMPONENNT
import LibrarySong from "./LibrarySong";

const Library = ({
  isPlay,
  audioRef,
  currentSong,
  setCurrentSong,
  songsData,
  setSongsData,
  library,
  setLibrary,
}) => {
  return (
    <div className={`library ${library ? "libraryStatus" : ""}`}>
      <h1>Library</h1>
      <div className="library-song">
        {songsData.map((song) => (
          <LibrarySong
            key={song.id}
            id={song.id}
            audioRef={audioRef}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            song={song}
            isPlay={isPlay}
            songsData={songsData}
            setSongsData={setSongsData}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
