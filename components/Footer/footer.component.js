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

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">8 Random Facts</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">Let me help you to picture me. Here're my own judgments + what others say about me.
          <ol className="modal-body ol ">
            <li>Life is all about "Perfect magical moments 💜"</li>
            <li>I am head over heels, a whopping 108% in love, love, loveeee with NLP even as a beginner!</li>
            <li>Sometimes I am struck by that flash energy to  binge-watch a TV series in just one day.</li>
            <li>How my career dreams changed as I grew up: Film Director, Docoter, Air Hostess(cus I love to fly), Accountant, Academic Reseracher</li>
            <li>Pretty skies and the serene sea never fail to fill me with sheer joy.</li>
            <li>I have OCD, especially when it comes to keeping things super organised.</li>
            <li>My folks say that I have a tad less common sense.</li>
            <li>What if I'm just pretending all along? <b>(Jinx!)</b></li>
            <li>Andd here's a bonus: As for why eight? It is a very artistic number, and I love it.</li>
          </ol>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;
