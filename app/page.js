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
import Navbar from "@components/Navbar/navbar.component";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container px-lg-5 px-4">
        <div className="vh-md-100 py-5 py-md-0 row align-items-center">
          <div className="row py-lg-5 py-3">
            <div className="pt-lg-5">
              <h1 className="col-md-8 d-flex">
                Hello <div className={styles.shake}>👋</div>
              </h1>
            </div>
            <div>
              <h1 className={`col-md-8 py-lg-5 py-5 ${styles.coverText}`}>
                {" "}
                I'm <b>Uvini Ranaweera</b> — an avid researcher who never gets tired of chasing after{" "}
                <span className={styles.gradientText}>learning machines</span>👩🏻‍💻
              </h1>
            </div>
            <div className="py-lg-5 py-3 d-flex align-items-center">
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
        <div className="container mt-lg-2 pb-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 my-3 my-lg-0">
              <Link href={"https://online.fliphtml5.com/jqdru/emhr/#p=1"} target="_blank" className="row justify-content-center">
                <Image className={styles.cover} src={cover} />
              </Link>
            </div>
            <div className="col-md-6 my-3 my-lg-0">
              <div className="pb-5 text-center text-md-start">
                <h2 id="about" className={`rounded ${styles.largeText}`}>
                  {" "}
                  WHO AM I 👀
                </h2>
              </div>
              <div className="bio-wrapper">
                <p className={styles.smallText}>
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
              <div className={`${styles.extraSmallText} pt-3`} style={{ fontSize: "18px" }}>
                View my{" "}
                <a className="navbar-brand" href="/resume.pdf" target="_">
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
          <div className="text-center pb-3 pt-5">
            <h2 id="publications" className={`rounded ${styles.largeText}`}>
              {" "}
              PUBLISHED WORK 🔬{" "}
            </h2>
          </div>
        </div>

        <Publication />

        <div className={`${styles.extraSmallText} text-center py-md-5 py-4`} style={{ fontSize: "18px" }}>
          Feel free to explore{" "}
          <a className="navbar-brand" href="https://www.linkedin.com/in/uvini-ranaweera-/" target="_">
            <span className={styles.gradientText}>
              <b>Google Scholar </b>
            </span>
          </a>
          to find them in order.
        </div>
        <div className="text-center py-md-5 pt-3">
          <h2 id="projects" className={`rounded ${styles.largeText}`}>
            {" "}
            ACADEMIC PROJECTS 👩🏻‍💻
          </h2>
        </div>
        <div className={`${styles.cardRow} row align-items-stretch py-3`}>
          <ProjectCard />
        </div>

        <div className={`text-center ${styles.smallText} py-lg-5`} style={{ fontSize: "18px" }}>
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
            <div className="col-md-4 mb-2 mt-md-0 col-lg-5 h-100">
              <div className="mb-3" style={{ fontSize: "25px", fontFamily: "Source Sans 3" }}>
                <p style={{ fontSize: "25px", fontFamily: "Source Sans 3" }} className={styles.largeText}>
                  When I'm not staring at a computer screen, you'll find me with a <span className={`${styles.travel} px-2 rounded`}>travel itinerary ✈️</span>{" "}
                </p>
              </div>
            </div>
            <div className="col-md-8 mt-2 mt-md-0 col-lg-7 d-flex justify-content-center">
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
