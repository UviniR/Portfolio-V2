"use client";
import React, { useState } from "react";
import styles from "@styles/TravelCard.module.css";
import travelData from "@data/travel";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"

const TravelCard = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nexttIdx, setNexttIdx] = useState(currentIdx + 1);
  const [prevIdx, setPrevIdx] = useState(travelData.length - 1);

  const onIdxChange = (isAdd) => {
    if (isAdd) {
      if (currentIdx === travelData.length - 1) {
        setCurrentIdx(0);
        setNexttIdx(nexttIdx + 1);
        setPrevIdx(prevIdx + 1);
        return;
      }

      if (nexttIdx === travelData.length - 1) {
        setNexttIdx(0);
        setPrevIdx(prevIdx + 1);
        setCurrentIdx(currentIdx + 1);
        return;
      }

      if (prevIdx === travelData.length - 1) {
        setPrevIdx(0);
        setCurrentIdx(currentIdx + 1);
        setNexttIdx(nexttIdx + 1);
        return;
      }
      setCurrentIdx(currentIdx + 1);
      setNexttIdx(nexttIdx + 1);
      setPrevIdx(prevIdx + 1);
    } else {
      if (currentIdx === 0) {
        setCurrentIdx(travelData.length - 1);
        setNexttIdx(nexttIdx - 1);
        setPrevIdx(prevIdx - 1);
        return;
      }

      if (nexttIdx === 0) {
        setNexttIdx(travelData.length - 1);
        setCurrentIdx(currentIdx - 1);
        setPrevIdx(prevIdx - 1);
        return;
      }

      if (prevIdx === 0) {
        setPrevIdx(travelData.length - 1);
        setNexttIdx(nexttIdx - 1);
        setCurrentIdx(currentIdx - 1);
        return;
      }

      setCurrentIdx(currentIdx - 1);
      setPrevIdx(prevIdx - 1);
      setNexttIdx(nexttIdx - 1)
    }
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div className={`${styles.beforeCard} d-md-none d-lg-block col-lg-3 card p-0 text-center`} style={{ backgroundImage: `url(${travelData[prevIdx].img.src})` }}></div>

      <div className={`${styles.card}  col-lg-6 card p-0 text-center`} style={{ backgroundImage: `url(${travelData[currentIdx].img.src})` }}>
        <div className={styles.overlay}>
          <div className={`row px-5 justify-content-start align-items-end pb-4 ${styles.text}`}>
            <p className={`m-0 ${styles.textContent}`}>{travelData[currentIdx].place}</p>
          </div>
        </div>
      </div>
      <div className={`${styles.afterCard} d-md-none d-lg-block col-lg-3 card p-0 text-center`} style={{ backgroundImage: `url(${travelData[nexttIdx].img.src})` }}></div>

      <div className="d-flex px-5 py-3 justify-content-center align-items-center">
        <button className={`btn me-3 p-1 ${styles.arrowBtn}`} onClick={(e) => onIdxChange(false)}>
          <AiOutlineArrowLeft size={15} />
        </button>
        <button className={`btn ms-3 p-1 ${styles.arrowBtn}`} onClick={(e) => onIdxChange(true)}>
          <AiOutlineArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default TravelCard;
