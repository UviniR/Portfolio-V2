"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Logo from "components/Logo/logo.js";
import Footer from "components/Footer/footer.component.js";
import NavBar from "components/Navbar/navbar.component.js";
import Article from "components/PublicationsCard/publications.js";
import AllProjects from "components/ProjectCard/projects.js";
import { BiHomeAlt2, BiLogoLinkedin } from "react-icons/bi";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";


import TravelCard from "@components/TravelCard/travelCard.component";

import styles from "@styles/homepage.module.css";

const Homepage = () => {
    const [stayLogo, setStayLogo] = useState(false);
    const [logoSize, setLogoSize] = useState(80);
    const [oldLogoSize, setOldLogoSize] = useState(80);

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


            <div className="page-content">
                <NavBar active="home" />
                <div className="content-wrapper">
                    <div className={styles.homepageLogoContainer}>
                        <div style={logoStyle}>
                            <Logo width={logoSize} link={false} />
                        </div>
                    </div>

                    <div className={styles.homepageContainer}>
                        <div className={styles.homepageFirstArea}>
                            <div className={styles.homepageFirstAreaLeftSide}>
                                <div className={`title ${styles.homepageTitle}`}>
                                    a curious mind that never gets tired of chasing after{" "}
                                    <span className={styles.gradientText}>learning machines</span>👩🏻‍💻
                                </div>
                                <div className="py-lg-5 py-3 d-flex align-items-center">
                                    <Link href={"/Uvini_CV.pdf"} target="_blank" className={`${styles.icons} pe-4`}>
                                        <IoDocumentAttach size={24} />
                                    </Link>
                                    <Link href={"mailto:ranaweeraraua.19@uom.lk"} target="_blank" className={`${styles.icons} pe-4`}>
                                        <MdEmail size={24} />
                                    </Link>
                                    <Link href={"https://www.linkedin.com/in/uvini-ranaweera-/"} target="_blank" className={`${styles.icons} pe-4`}>
                                        <BiLogoLinkedin size={26} />
                                    </Link>

                                    <Link href={"https://scholar.google.com/citations?user=P1ECyTcAAAAJ&hl=en"} target="_blank" className={`${styles.icons} pe-4`}>
                                        <SiGooglescholar size={24} />
                                    </Link>
                                </div>
                                <div className={`subtitle ${styles.homepageSubtitle}`}>

                                    <div className={` ${styles.bioWrapper} pt-3`}>

                                        <p style={{ fontSize: "102%" }} className={`text-center text-md-start mb-5`}>

                                            Hey I am Uvini <span className={styles.shake}>👋</span> - a final-year Business Science undergraduate 👩🏻‍🎓 at{" "}
                                            <Link href={"http://uom.lk/business"} target={"_"} className={styles.uomLink}>
                                                <b className="fw-bold">University of Moratuwa</b>
                                            </Link>
                                            , Sri Lanka 🇱🇰 <br></br>
                                            Basically, I support data-driven decision-making 🤯 by developing Machine Learning models. When it comes to{" "}
                                            <span className={styles.bioText}>
                                                <b className="fw-bold">Natural Language Processing</b>
                                            </span>
                                            , my excitement hits the roof!
                                            <span className={styles.cartoonCharacter}></span>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div >
                            <div className={`my-3`}>
                                <h6 id="publications"> 
                                    {" "}
                                    <b>PUBLISHED WORK 🔬</b>{" "}
                                    <span className={`text-center py-md-5 py-4 textTitle`} style={{ fontSize: "16px", color: "#65656d" }}>
                                        &nbsp; Explore {" "}
                                        <a className="navbar-brand" href="https://scholar.google.com/citations?user=P1ECyTcAAAAJ&hl=en" target="_">
                                            <span className={styles.gradientText}>
                                                Google Scholar
                                            </span>
                                        </a>{" "}
                                        to find them in order.
                                    </span>
                                </h6><hr></hr>
                                <Article />

                            </div>
                            <div className={`${styles.homepageProjects} my-3`}>

                                <h6 id="projects">
                                    {" "}
                                    <b>ACADEMIC PROJECTS 👩🏻‍💻</b>  <span className={`text-center py-md-5 py-4 textTitle`} style={{ fontSize: "16px", color: "#65656d" }}>
                                        &nbsp; Take a stroll through my{" "}
                                        <a className="navbar-brand" href="https://github.com/UviniR" target="_">
                                            <span className={styles.gradientText}>
                                                GitHub repositories
                                            </span>
                                        </a>
                                        .
                                    </span>
                                </h6><hr></hr>
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <AllProjects />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`pt-md-3 pb-md-5 ${styles.section}`}>
                            <div className=" py-5 row justify-content-center align-items-center">
                                <div className="col-md-4 mb-2 mt-md-0 col-lg-5 h-100">
                                    <div className="mb-3" >
                                        <h4 className={`text-center text-md-start textTitle`}>
                                            When I&apos;m not staring at a computer screen, you&apos;ll find me with a{" "}
                                            <span className={styles.gradientText}>{"travel\u00A0itinerary"}</span> ✈️ {" "}
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-2 mt-md-0 col-lg-7 d-flex justify-content-center">
                                    <TravelCard />
                                </div>
                            </div>
                        </div>

                        <div className="page-footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Homepage;
