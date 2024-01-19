"use client";
import React, { useEffect, useState } from "react";
import styles from "@styles/music.module.css";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

const Music = () => {
  const [aud, setAud] = useState(null);

  useEffect(() => {
    setAud(document.getElementById("sound"))
  }, [])

  const play = () => {
    aud.play();
    document.getElementById("play").style.display = "none";
    console.log(document.getElementsByName("stop"))
    document.getElementsByName("stop").forEach(e => {
      e.style.display = "inline";
    })
  };

  const stop = () => {
    aud.pause();
    aud.currentTime = 0;
    document.getElementById("play").style.display = "inline";
    document.getElementsByName("stop").forEach(e => {
      e.style.display = "none";
    })
  };
  return (
    <>
      <div className={`text-center fs-4 pt-3 ${styles.musicTxt}`}>
        <span style={{ marginRight: '20px' }}>Hit-up to add some beats to the feast!</span>
        <button onClick={(_) => play()} id="play" className={`${styles.playBtn}`}>
          <HiMiniSpeakerWave size={25} color="#ccd6f6" />
        </button>
        <button onClick={(_) => stop()} id="stop" className={`${styles.stopBtn}`} name="stop">
          <HiMiniSpeakerXMark size={25} color="#ccd6f6" />
        </button>
      </div>
      <audio src="/background-music.mp3" id="sound" loop>
      Oh, snap! Your browser's got stage fright and won't play the audio element 🥱
      </audio>
    </>
  );
};

export default Music;
