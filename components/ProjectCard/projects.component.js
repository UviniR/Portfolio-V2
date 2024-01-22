"use client";
import React, { useEffect, useState } from "react";

import styles from "@styles/project.module.css";
import Link from "next/link";
import projects from "@data/projects";

const Project = (props) => {
	const [isLight, setIsLight] = useState(props.isLight)

	useEffect(() => {
		setIsLight(props.isLight)
	},[props])

	return (
		<React.Fragment>
			{
	projects.map((e,idx) => (
			<div key={idx} className={isLight? `${styles.project} col-md-4`:`${styles.projectDark} col-md-4`}>
				<Link href={e.link} target="_">
					<div className={styles.projectContainer}>
						<div className={styles.projectLogo}>
							<img src={e.logo} alt="logo" />
						</div>
						<div className={isLight? styles.projectTitle:styles.projectTitleDark}>{e.title}</div>
						<div className={isLight? styles.projectDescription:styles.projectDescriptionDark}>{e.description}</div>
			
						<div className={`${styles.badgeRow} d-flex flex-wrap justify-content-start mt-4`}>
              {e.technologies.map((t, i) => (
                <span className={`${styles.badge}`} key={i}>
                  {t}
                </span>
              ))}
            </div>
					</div>
				</Link>
			</div>
			))}
		</React.Fragment>
	);
};

export default Project;