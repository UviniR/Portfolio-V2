import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@styles/navbar.module.css";


const NavBar = (props) => {
	const [active,setActive] = useState(props.active)

	useEffect(() => {
		setActive(props.active)
	},[props])
	return (
		<React.Fragment>
			
			<div className={styles.navContainer}>
				<nav className={styles.navbar}>
					<div className={styles.navBackground}>
						<ul className={styles.navList}>
							<li
								className={
									active === "home"
										? styles.navItemActive
										: "navItem"
								}
							>
								<Link href="/" className={styles.navItem}>Home</Link>
							</li>
							<li
								className={
									active === "publications"
										? styles.navItemActive
										: "navItem"
								}
							>
								<Link href="#publications" className={styles.navItem}>Publications</Link>
							</li>
							<li
								className={
									active === "projects"
										? styles.navItemActive
										: "navItem"
								}
							>
								<Link href="#projects" className={styles.navItem}>Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "navItem active"
										: "navItem"
								}
							>
								<Link href={"/Uvini_CV.pdf"} target="_blank" className={styles.navItem}>CV 👩🏻‍💻</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;