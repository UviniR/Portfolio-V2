"use client";
import React from "react";
import styles from "@styles/music.module.css";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

const Music = () => {
  var aud;

  const play = () => {
    aud = document.getElementById("sound");
    aud.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "block";
  };

  const stop = () => {
    aud = document.getElementById("sound");
    aud.pause();
    aud.currentTime = 0;
    document.getElementById("play").style.display = "block";
    document.getElementById("stop").style.display = "none";
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-2">
          <button onClick={(_) => play()} id="play" className={styles.playBtn}>
            <HiMiniSpeakerWave size={25} color="#ccd6f6" />
          </button>
          <button onClick={(_) => stop()} id="stop" className={styles.stopBtn}>
            <HiMiniSpeakerXMark size={25} color="#ccd6f6" />
          </button>
        </div>
      </div>
      <audio src="/background-music.mp3" id="sound">
        Your browser does not support the audio element.
      </audio>
      <div className={`text-center fs-4 pt-3 ${styles.musicTxt}`}>Hit-up to add some beats to the feast! 🔊</div>
    </>
  );
};

export default Music;
