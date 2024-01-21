"use client";
import Image from "next/image";
import React, { useState } from "react";
import box from "@public/assets/box.gif";
import styles from "@styles/footer.module.css";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs"
import Link from "next/link";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={`d-flex pt-3 pb-3 justify-content-end px-md-4 align-items-center`}>
        <div className="row justify-content-center text-start pt-3">
          <p className={`m-0 pe-5 ${styles.footerText}`}>Homemade by yours truly <BsFillSuitHeartFill /> <br /><span className={styles.footerTag}>Inspired by <Link className={`text-decoration-none ${styles.Link}`} target="_" href={"https://github.com/dsbalico/dsfolio"}>DSFolio</Link> </span></p>
        </div>
        <div onClick={handleShow} className={`${styles.btn}`}>
          <Image src={box} width={70} height={75} alt="box" />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg" className={`${styles.background}`}>

        <Modal.Body className={`modal-body px-5 py-5`}>
          <h3 className={`text-start pb-3 ${styles.titles} ${styles.largeText} rounded`}>8 RANDOM FACTS 🎁 </h3>
          <p className={styles.smallText}>
            {" "}
              A blend of <span className="gradientText">my own judgements</span> + <span className="gradientText">what others say</span>.
      
          </p>
          <ol className={`${styles.list} py-2`}>
            <li>
              Life is all about <b>&quot;Perfect magical moments 💜&quot;</b>
            </li>
            <li>I am head over heels, a whopping 108% in love, love, loveeee with NLP!</li>
            <li>I am famous for my OCD, especially when it comes to keeping things super organised.</li>
            <li>
              Here&apos;s how my career dreams changed as I grew up: Air Hostess, Doctor, Film Director, Accountant, Professor (can be a Doctor* again!!!)
            </li>
            <li>Sometimes I am struck by a flash energy to binge-watch a TV series in just one day.</li>
            <li>Matplotlib is like my classic favourite and Plotly is the new beat that gets my heart racing.</li>
            <li>Folks say that I have a tad less common sense.</li>
            <li>
              What if I&apos;m just pretending all along? <b>(Jinx!)</b>
            </li>
          </ol>
          <div className="row justify-content-end">
            <div className="col-2 pe-5 pe-md-0">
              <button onClick={handleClose} className={`fs-2 py-0 pe-3 px-lg-1 ${styles.close}`}>
                👉🏻
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;
