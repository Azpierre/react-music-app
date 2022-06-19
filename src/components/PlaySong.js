import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PlaySongs = ({
  songsData,
  setSongsData,
  audioRef,
  currentSong,
  setCurrentSong,
  isPlay,
  setIsPlay,
  songsTimer,
  setSongsTimer,
}) => {
  //console.log(audioRef.current.currentTime);
  const playMusicHandler = () => {
    if (!isPlay) {
      audioRef.current.play();
      setIsPlay(!isPlay);
    } else {
      audioRef.current.pause();
      setIsPlay(!isPlay);
    }
  };

  const skipForward = () => {
    let currentIndex = songsData.findIndex(
      (song) => song.id === currentSong.id
    );
    setCurrentSong(songsData[(currentIndex + 1) % songsData.length]);
  };
  const skipBack = () => {
    let currentIndex = songsData.findIndex(
      (song) => song.id === currentSong.id
    );

    if ((currentIndex - 1) % songsData.length === -1) {
      setCurrentSong(songsData[songsData.length - 1]);
      return;
    }
    setCurrentSong(songsData[(currentIndex - 1) % songsData.length]);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const updateTimerHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongsTimer({ ...songsTimer, currentTime: current, duration: duration });
  };

  const updateDragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongsTimer({ ...songsTimer, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songsTimer.currentTime || 0)}</p>
        <input
          onChange={updateDragHandler}
          min={0}
          max={songsTimer.duration || 0}
          value={songsTimer.currentTime}
          type="range"
        />
        <p>{getTime(songsTimer.duration || 0)}</p>
      </div>
      <div className="song-control">
        <FontAwesomeIcon onClick={skipBack} size="2x" icon={faChevronLeft} />
        <FontAwesomeIcon
          onClick={playMusicHandler}
          size="2x"
          icon={isPlay ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={skipForward}
          size="2x"
          icon={faChevronRight}
        />
      </div>
      <audio
        onTimeUpdate={updateTimerHandler}
        onLoadedMetadata={updateTimerHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default PlaySongs;
