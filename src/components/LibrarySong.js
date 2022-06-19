import React from "react";

const LibrarySong = ({
  song,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlay,
  id,
  songsData,
  setSongsData,
}) => {
  //Add State

  const songSelectHandler = () => {
    setCurrentSong(song);
    const promiseAudio = audioRef.current.play();
    console.log(song);
    //ADD STATE
    const songActive = songsData.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongsData(songActive);

    if (isPlay) {
      if (promiseAudio !== undefined) {
        promiseAudio.then(() => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`librarySong ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="info">
        <h3>{song.name}</h3>
        <h4>{song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySong;
