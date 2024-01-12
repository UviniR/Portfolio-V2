"use client";
import React from "react";
import Image from "next/image";
import styles from "@styles/page.module.css";
import cover from "@public/assets/read.svg";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaKaggle } from "react-icons/fa";
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
      <div className="container px-lg-5 px-4 py-5 py-lg-0">
        <div className={`py-5 py-md-0 row align-items-center ${styles.header}`}>
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
              <Link href={"https://scholar.google.com/citations?user=P1ECyTcAAAAJ&hl=en"} target="_blank" className={`${styles.icons} pe-4`}>
                <SiGooglescholar size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="container mt-lg-2 pb-md-5">
          <div className={`row align-items-lg-center align-items-center ${styles.section}`}>
            <div className="col-md-6 my-3 my-lg-0">
              <Link href={"https://lianemoriarty.com.au/Book/truly-madly-guilty-us/"} target="_blank" className="row justify-content-center">
                <Image className={styles.cover} src={cover} />
              </Link>
            </div>
            <div className="col-md-6 my-3 my-lg-0">
              <div className={`pb-5 text-center text-md-start`}>
                <h2 id="about" className={`rounded ${styles.largeText}`}>
                  {" "}
                  WHO AM I 👀
                </h2>
                <div className="bio-wrapper pt-5">
                <p className={`${styles.smallText} text-center text-md-start`}>
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
              <div className={`${styles.extraSmallText} pt-3 text-center text-md-start`} style={{ fontSize: "18px" }}>
                View my{" "}
                <a className="navbar-brand" href="/Uvini_CV.pdf" target="_">
                  <span className={styles.gradientText}>
                    <b>CV</b>
                  </span>
                </a>{" "}
                for the full BLAH BLAH 😁
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`py-5 ${styles.section}`}>
          <div className="text-center pb-5 pt-5">
            <h2 id="publications" className={`rounded ${styles.largeText}`}>
              {" "}
              PUBLISHED WORK 🔬{" "}
            </h2>
          </div>
          <Publication />
          <div className={`${styles.extraSmallText} text-center py-md-5 py-4`} style={{ fontSize: "18px" }}>
            Feel free to explore{" "}
            <a className="navbar-brand" href="https://scholar.google.com/citations?user=P1ECyTcAAAAJ&hl=en" target="_">
              <span className={styles.gradientText}>
                <b>Google Scholar </b>
              </span>
            </a>
            to find them in order.
          </div>
        </div>

        <div className={`py-5 ${styles.section} text-center`}>
          <h2 id="projects" className={`rounded ${styles.largeText}`}>
            {" "}
            ACADEMIC PROJECTS 👩🏻‍💻
          </h2>
          <div className={`${styles.cardRow} row align-items-stretch pt-5 pb-5`}>
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
        </div>

       

        <div className={`py-5 ${styles.section}`}>
          <div className=" py-5 row justify-content-center align-items-center">
            <div className="col-md-4 mb-2 mt-md-0 col-lg-5 h-100">
              <div className="mb-3" style={{ fontSize: "25px", fontFamily: "Source Sans 3" }}>
                <p style={{ fontSize: "25px", fontFamily: "Source Sans 3" }} className={`${styles.largeText} text-center text-md-start`}>
                  When I'm not staring at a computer screen, you'll find me with a{" "}
                  <span className={`${styles.travel} px-2 rounded`}>{"travel\u00A0itinerary"} ✈️</span>{" "}
                </p>
              </div>
            </div>
            <div className="col-md-8 mt-2 mt-md-0 col-lg-7 d-flex justify-content-center">
              <TravelCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
