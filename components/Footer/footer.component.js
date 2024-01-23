"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import box from "@public/assets/box.gif";
import styles from "@styles/footer.module.css";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Link from "next/link";

const Footer = (props) => {
  const [show, setShow] = useState(false);
  const [isLight, setIsLight] = useState(props.isLight);

  useEffect(() => {
    setIsLight(props.isLight);
  }, [props]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={`d-flex pt-3 pb-3 justify-content-end px-md-4 align-items-center`}>
        <div className="row justify-content-center text-start pt-3">
          <p className={isLight ? `m-0 pe-5 ${styles.footerText}` : `m-0 pe-5 ${styles.footerTextDark}`}>
            Homemade by yours truly <BsFillSuitHeartFill /> <br />
            <span className={isLight ? styles.footerTag : styles.footerTagDark}>
              Inspired by{" "}
              <Link className={isLight? `text-decoration-none ${styles.Link}`:`text-decoration-none ${styles.LinkDark}`} target="_" href={"https://github.com/UviniR/Portfolio-V2"}>
                Uvini
              </Link>{" "}
            </span>
          </p>
        </div>
        <div onClick={handleShow} className={`${styles.btn}`}>
          <Image src={box} width={70} height={75} alt="box" />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className={`modal-body px-5 py-5 rounded ${isLight? styles.background : styles.backgroundDark}`}>
          <h3 className={`text-start pb-3 ${isLight? styles.titles: styles.titlesDark} ${styles.largeText} rounded`}>RANDOM FACTS 🎁 </h3>
          <p className={isLight? styles.smallText:styles.smallTextDark}>
            {" "}
            text <span className="gradientText">text</span> + <span className="gradientText">text</span>.
          </p>
          <ol className={`${isLight? styles.list: styles.listDark} py-2`}>
            <li>
              text
            </li>
            <li>text</li>
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
