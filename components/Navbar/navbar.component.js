"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@styles/navbar.module.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const NavBar = (props) => {
	const [active,setActive] = useState(props.active)
	const [isLight, setIsLocalLight] = useState(props.isLight);
	const {setIsLight} = props;

	const handleTheme = () => {
		setIsLight(!isLight);
		setIsLocalLight(!isLight)
	}
  
	useEffect(() => {
		setActive(props.active)
		setIsLocalLight(props.isLight)
	},[props])
	return (
		<React.Fragment>
			
			<div className={styles.navContainer}>
				<nav className={styles.navbar}>
					<div className={isLight? styles.navBackground:styles.navBackgroundDark}>
						<ul className={styles.navList}>
							<li
								className={
									active === "home"
										? styles.navItemActive
										: "navItem"
								}
							>
								<Link href="/" className={isLight? styles.navItem: styles.navItemDark}>Home</Link>
							</li>
							<li
								className={
									active === "publications"
										? styles.navItemActive
										: "navItem"
								}
							>
								<Link href="#publications" className={isLight? styles.navItem: styles.navItemDark}>Publications</Link>
							</li>
							<li
								className={
									active === "projects"
										? styles.navItemActive
										: "navItem"
								}
							>
								<Link href="#projects" className={isLight? styles.navItem: styles.navItemDark}>Projects</Link>
							</li>
							<li
								className={"navItem"}
							>
								<Link href={"/Uvini_CV.pdf"} target="_blank" className={isLight? styles.navItem: styles.navItemDark}>CV 👩🏻‍💻</Link>
							</li>
							<li
								className={"navItem"}
							>
								<button onClick={_ => handleTheme()}  className={`btn p-0 ${isLight? styles.navItem: styles.navItemDark}`}>{isLight? <MdDarkMode className={styles.themeIcon} size={20} /> : <MdOutlineDarkMode className={styles.themeIconDark} size={20} /> }</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;