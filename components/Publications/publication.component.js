"use client";
import Link from "next/link";
import React from "react";
import styles from "@styles/publication.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import publications from "@data/publications";

const Publication = () => {
  return (
    <>
      {publications.map((e, idx) => (
        <Link href={e.link} target="_" className={`${styles.workCard} my-3 px-3 my-3 py-2 card rounded border-0 text-decoration-none`} key={idx}>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8">
              <span className={`${styles.badge} badge mb-4`}>{e.type}</span>
              <h3 className="text-start">{e.title}</h3>
            </div>
            <div className="col-md-4 border-start ps-5">
              <p style={{ fontSize: "18px" }} className="m-0">
                {e.conference}
              </p>
              <div className="justify-content-between d-flex py-2">
                <span style={{ fontSize: "15px", color: "#ccd6f6" }} className="m-0">
                  {e.date}
                </span>
                <span style={{ color: "#ccd6f6" }}>
                  <FaExternalLinkAlt className={styles.viewButton} size={15} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Publication;
