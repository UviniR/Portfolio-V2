"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Logo from "@components/Logo/logo.component.js";
import Footer from "@components/Footer/footer.component.js";
import NavBar from "@components/Navbar/navbar.component.js";
import Article from "@components/PublicationsCard/publications.component.js";
import AllProjects from "@components/ProjectCard/projects.component.js";
import { BiHomeAlt2, BiLogoLinkedin } from "react-icons/bi";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";

import styles from "@styles/homepage.module.css";

const Homepage = () => {
  const [isLight, setIsLight] = useState(true)
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavbar = () => {
    const scrollPosition = window.scrollY;
    const sections = ["home", "publications", "projects"];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        const offsetBottom = offsetTop + element.offsetHeight - 10;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <React.Fragment>
      <div className={isLight? "page-content" : "page-content-dark"}>
        <NavBar active={activeSection} isLight={isLight} setIsLight={setIsLight} />
        <div className="content-wrapper">
          <div className={`row ${styles.hero}`}>
            <div className={styles.homepageLogoContainer}>
              <div style={logoStyle}>
                <Logo width={logoSize} link={false} />
              </div>
            </div>

            <div className={styles.homepageContainer} id="home">
              <div className={styles.homepageFirstArea}>
                <div className={styles.homepageFirstAreaLeftSide}>
                  <div className={isLight? `title py-lg-5 ${styles.homepageTitle}`: `${styles.homepageTitleDark} title py-lg-5`}>
                  Lorem ipsum dolor sit amet <span className={styles.gradientText}>highlight</span>👩🏻‍💻
                  </div>
                  <div className="py-lg-5 py-3 d-flex align-items-center">
                    <Link href={"/CV.pdf"} target="_blank" className={isLight? `${styles.icons} pe-4`: `${styles.iconsDark} pe-4`}>
                      <IoDocumentAttach size={24} />
                    </Link>
                    <Link href={"mailto:example@example.com"} target="_blank" className={isLight? `${styles.icons} pe-4`: `${styles.iconsDark} pe-4`}>
                      <MdEmail size={24} />
                    </Link>
                    <Link href={"https://www.linkedin.com"} target="_blank" className={isLight? `${styles.icons} pe-4`: `${styles.iconsDark} pe-4`}>
                      <BiLogoLinkedin size={26} />
                    </Link>

                    <Link href={"https://scholar.google.com"} target="_blank" className={isLight? `${styles.icons} pe-4`: `${styles.iconsDark} pe-4`}>
                      <SiGooglescholar size={24} />
                    </Link>
                  </div>
                  <div className={isLight? `subtitle ${styles.homepageSubtitle}`: `subtitle ${styles.homepageSubtitleDark}`}>
                    <div className={` ${styles.bioWrapper} pt-3`}>
                      <p style={{ fontSize: "110%", lineHeight: 2}} className={`text-center text-md-start mb-5`}>
                        Hey I am Name 👋 - aLorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua to{" "}
                        <span className={styles.bioText}>
                          <b className="fw-bold">magical text</b>
                        </span>
                        <span className={styles.cartoonCharacter}></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className={`my-3`}>
                <h6 id="publications">
                  {" "}
                  <b className={isLight? "" : "h6Dark "}>PUBLISHED WORK 🔬</b>{" "}
                  <span className={`text-center py-md-5 py-4 textTitle`} style={{ fontSize: "18px", color: `${isLight? "#65656d":"#b1b1c0"}` }}>
                    &nbsp; Explore{" "}
                    <a className="navbar-brand" href="https://scholar.google.com" target="_">
                      <span className={styles.gradientText}>Google Scholar</span>
                    </a>{" "}
                    to find them in order.
                  </span>
                </h6>
                <hr className={isLight? "":styles.darkHr} />
                <Article isLight={isLight} />
              </div>
              <div className={`${styles.homepageProjects} my-3 pb-5`}>
                <h6 id="projects">
                  {" "}
                  <b className={isLight? "" : "h6Dark "}>ACADEMIC PROJECTS 👩🏻‍💻</b>{" "}
                  <span className={`text-center py-md-5 py-4 textTitle`} style={{ fontSize: "18px", color: `${isLight? "#65656d":"#b1b1c0"}` }}>
                    &nbsp; Take a stroll through my{" "}
                    <a className="navbar-brand" href="https://github.com" target="_">
                      <span className={styles.gradientText}>GitHub repositories</span>
                    </a>
                    .
                  </span>
                </h6>
                <hr className={isLight? "":styles.darkHr} />
                <div className="container">
                  <div className="row align-items-center justify-content-center pb-5">
                    <AllProjects isLight={isLight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${isLight? "footerWrapper":"footerWrapperDark"} page-footer`}>
            <Footer isLight={isLight} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
