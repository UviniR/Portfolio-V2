"use client";
import React, { useEffect, useState } from "react";
import styles from "@styles/navbar.module.css";
import modalStyles from "@styles/footer.module.css";
import { Modal } from "react-bootstrap";
import { CiMenuKebab } from "react-icons/ci";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [aud, setAud] = useState(null);

  const handleShow = () => {
    setShow(true);
    navBarCollapse();
  };

  useEffect(() => {
    setAud(document.getElementById("sound"));
  }, []);

  const stop = () => {
    console.log("clicked")
    aud.pause();
    aud.currentTime = 0;
    document.getElementById("play").style.display = "inline";
    document.getElementsByName("stop").forEach((e) => {
      e.style.display = "none";
    });
  };

  const navBarCollapse = () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
        <div className="container px-lg-5">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="https://www.linkedin.com/in/uvini-ranaweera-/" target="_">
            Uvini R.
          </a>
          <button
            className={`navbar-toggler px-0 ${styles.navBarIcon}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={styles.Icon}>
              <CiMenuKebab className={styles.Icon} size={25} />{" "}
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link ${styles.navLink}`} href="#about" onClick={(_) => navBarCollapse()}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navLink}`} href="#publications" onClick={(_) => navBarCollapse()}>
                  Publications
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navLink}`} href="#projects" onClick={(_) => navBarCollapse()}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navLink}`} href="#blog" onClick={handleShow}>
                  8 Random Facts 🎁
                </a>
              </li>
              <li>
                <button onClick={(_) => stop()} id="stop" className={`${styles.stopBtn} nav-link`} name="stop">
                  <HiMiniSpeakerXMark size={25} color="#ccd6f6" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose} centered size="lg" className={`${styles.background}`}>
        {/* <Modal.Header closeButton className={`modal-body text-light ${styles.titlecard} px-5`}>
          <ModalTitle><span className={`px-2 ${styles.titles} rounded`}>8 RANDOM FACTS 🎁 </span></ModalTitle>
        </Modal.Header> */}

        <Modal.Body className={`modal-body ${modalStyles.card} px-5 py-5`}>
          <h3 className={`text-start pb-3 ${modalStyles.titles} rounded`}>8 RANDOM FACTS 🎁 </h3>
          <p style={{ fontSize: "18px" }}>
            {" "}
            <b>
              A blend of <span className="gradientText">my own judgments</span> + <span className="gradientText">what others say</span>.
            </b>
          </p>
          <ol className={`${modalStyles.list} py-2`}>
            <li>
              Life is all about <b>&quot;Perfect magical moments 💜&quot;</b>
            </li>
            <li>I am head over heels, a whopping 108% in love, love, loveeee with NLP even as a beginner!</li>
            <li>I am famous for my OCD, especially when it comes to keeping things super organised.</li>
            <li>
              Here&apos;s how my career dreams changed as I grew up: Air Hostess, Doctor, Film Director, Accountant, Academic Reseracher (can be a Doctor*
              again!!!)
            </li>
            <li>Sometimes I am struck by a flash energy to binge-watch a TV series in just one day.</li>
            <li>Matplotlib is like my classic favorite and Plotly is the new beat that gets my heart racing.</li>
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

export default Navbar;
