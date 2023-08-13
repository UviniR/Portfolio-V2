"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "@styles/page.module.css";
import cover from "@public/assets/read.svg";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaKaggle, FaExternalLinkAlt } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Link from "next/link";
import TravelCard from "@components/TravelCard/travelCard.component";
import ProjectCard from "@components/ProjectCard/projectCard.component";
import Publication from "@components/Publications/publication.component";
import Footer from "@components/Footer/footer.component";

export default function Home() {

  return (
    <main>
      <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
        <div className="container px-5">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="https://www.linkedin.com/in/uvini-ranaweera-/" target="_">
            Uvini R.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#publications">
                  Publications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  8 Random Facts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container px-5">
        <div className="vh-100 row align-items-center">
          <div className="row py-5">
            <div className="pt-5">
              <h1 className="col-md-8 d-flex">
                Hello <div className={styles.shake}>👋</div>
              </h1>
            </div>
            <div>
              <h1 className="col-md-8 py-5">
                {" "}
                I'm <b>Uvini Ranaweera</b> — an avid researcher who never gets tired of chasing after{" "}
                <span className={styles.gradientText}>learning machines</span>👩🏻‍💻
              </h1>
            </div>
            <div className="py-5 d-flex align-items-center">
              <Link href={"https://www.linkedin.com/in/uvini-ranaweera-/"} target="_blank" className={`${styles.icons} pe-4`}>
                <BiLogoLinkedin size={30} />
              </Link>
              <Link href={"https://github.com/UviniR"} target="_blank" className={`${styles.icons} pe-4`}>
                <AiFillGithub size={30} />
              </Link>
              <Link href={"https://www.kaggle.com/uvinir"} target="_blank" className={`${styles.icons} pe-4`}>
                <FaKaggle size={30} />
              </Link>
              <Link href={""} target="_blank" className={`${styles.icons} pe-4`}>
                <SiGooglescholar size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="container mt-2 pb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <Link href={"https://online.fliphtml5.com/jqdru/emhr/#p=1"} target="_blank" className="row justify-content-center">
                <Image className={styles.cover} src={cover} width={360} height={360} />
              </Link>
            </div>
            <div className="col-md-6">
              <div className="pb-5">
                <h2 id="about" className="rounded">
                  {" "}
                  WHO AM I 👀
                </h2>
              </div>
              <div className="bio-wrapper">
                <p>
                  I’m a final-year Business Science undergraduate 👩🏻‍🎓 at{" "}
                  <Link href={"http://uom.lk/business"} target={"_"} className={styles.uomLink}>
                    <b>University of Moratuwa</b>
                  </Link>
                  , Sri Lanka 🇱🇰 <br></br>
                  <br></br>
                  Basically, I support data-driven decision-making 🤯 by developing Machine Learning models. When it comes to{" "}
                  <span className="bio-text">
                    <b>Natural Language Processing</b>
                  </span>
                  , my excitement hits the roof!
                  <span className="cartoon-character"></span>
                </p>
              </div>
              <div className="pt-3" style={{ fontSize: "18px" }}>
                View my{" "}
                <a className="navbar-brand" href="https://www.linkedin.com/in/uvini-ranaweera-/" target="_">
                  <span className={styles.gradientText}>
                    <b>CV</b>
                  </span>
                </a>{" "}
                for the full BLAH BLAH 😁
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center py-5">
            <h2 id="publications" className="rounded">
              {" "}
              PUBLISHED WORK 🔬{" "}
            </h2>
          </div>
        </div>

        <Publication />

        <div className="text-center  py-5" style={{ fontSize: "18px" }}>
          Feel free to explore{" "}
          <a className="navbar-brand" href="https://www.linkedin.com/in/uvini-ranaweera-/" target="_">
            <span className={styles.gradientText}>
              <b>Google Scholar </b>
            </span>
          </a>
          to find them in order.
        </div>
        <div className="text-center py-5">
          <h2 id="projects" className="rounded">
            {" "}
            ACADEMIC PROJECTS 👩🏻‍💻
          </h2>
        </div>
        <div className={`${styles.cardRow}  py-3`}>
          <ProjectCard />
        </div>

        <div className="text-center  py-5" style={{ fontSize: "18px" }}>
          For an immersive experience, take a stroll through my{" "}
          <a className="navbar-brand" href="https://github.com/UviniR" target="_">
            <span className={styles.gradientText}>
              <b>GitHub repositories</b>
            </span>
          </a>
          .
        </div>

        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 col-lg-5 h-100">
              <div className="mb-3" style={{ fontSize: "25px", fontFamily: "Source Sans 3" }}>
                <p style={{ fontSize: "25px", fontFamily: "Source Sans 3" }}>
                  When I'm not staring at a computer screen, you'll find me with a <span className={`${styles.travel} px-2 rounded`}>travel itinerary ✈️</span>{" "}
                </p>
              </div>
            </div>
            <div className="col-md-8 col-lg-7 d-flex justify-content-center">
              {/* <div className="gallery-reel-wrapper">
                <div className="gallery-reel">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-122-641a1d50c5283.jpg?crop=1xw:1xh;center,top&resize=980:*"
                    alt="Image 1"
                  />
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-124-641a1d51138cd.jpg?crop=1xw:1xh;center,top&resize=980:*"
                    alt="Image 2"
                  />
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-122-641a1d50c5283.jpg?crop=1xw:1xh;center,top&resize=980:*"
                    alt="Image 3"
                  />
                </div>
              </div> */}
              <TravelCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
