import React from "react";
import Link from "next/link";
import styles from "@styles/navbar.module.css";


const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
  
			<div className={styles.navContainer}>
				<nav className={styles.navbar}>
					<div className={styles.navBackground}>
						<ul className={styles.navList}>
							<li
								className={
									active === "about"
										? "navItem active"
										: "navItem"
								}
							>
								<Link href="/" className={styles.navItem}>Home</Link>
							</li>
							<li
								className={
									active === "Publications"
										? "navItem active"
										: "navItem"
								}
							>
								<Link href="#publications" className={styles.navItem}>Publications</Link>
							</li>
							<li
								className={
									active === "projects"
										? "navItem active"
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