"use client";
import Image from "next/image";
import React, { useState } from "react";
import box from "@public/assets/box.gif";
import styles from "@styles/footer.module.css";
import { Button, Modal } from "react-bootstrap";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className={`d-flex pb-3 justify-content-end px-4 align-items-center`}>
        <div onClick={handleShow} className={`${styles.btn}`}>
          <Image src={box} width={80} height={85} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg" className={`${styles.background}`}>
        <Modal.Header closeButton  className={`${styles.card}`}>
          <Modal.Title>
            <span className={`px-2 ${styles.titles} rounded`}>8 RANDOM FACTS </span>
            <p style={{ fontSize: '20px'}}> <b>Compiled with <span className="gradientText">my own judgments</span> + <span className="gradientText">what others say</span>.</b></p>
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className={`modal-body ${styles.card} px-5`}>
          <ol className={`${styles.list}`}>
            <li>Life is all about <b>"Perfect magical moments 💜"</b></li>
            <li>I am head over heels, a whopping 108% in love, love, loveeee with NLP even as a beginner!</li>
            <li>I am famous for my OCD, especially when it comes to keeping things super organised.</li>
            <li>Here's how my career dreams changed as I grew up: Air Hostess, Doctor, Film Director, Accountant, Academic Reseracher (can be a Doctor* again!!!)</li>
            <li>Sometimes I am struck by that flash energy to  binge-watch a TV series in just one day.</li>
            <li>Matplotlib is like my classic favorite and Plotly is the new beat that gets my heart racing.</li>
            <li>Folks say that I have a tad less common sense.</li>
            <li>What if I'm just pretending all along? <b>(Jinx!)</b></li>
            <li>Andd here's a bonus: As for why eight? Simply cus it is a very artistic number.</li>
          </ol>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;
