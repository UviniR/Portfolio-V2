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
      <div onClick={handleShow} className={`d-flex pb-3 justify-content-end px-2 align-items-center`}>
        <div className={`${styles.btn}`}>
          <Image src={box} width={200} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Hello Mage Rattaran Yaluwe</Modal.Title>
        </Modal.Header>

        <Modal.Body>Kiyannaa.... Kiyanaaaaaaa.......</Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;
