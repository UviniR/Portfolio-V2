import React from "react";

import styles from "@styles/project.module.css";
import Link from "next/link";
import projects from "@data/projects";

const Project = () => {
	return (
		<React.Fragment>
			{
	projects.map((e,idx) => (
			<div key={idx} className={`${styles.project} col-md-4`}>
				<Link href={e.link} target="_">
					<div className={styles.projectContainer}>
						<div className={styles.projectLogo}>
							<img src={e.logo} alt="logo" />
						</div>
						<div className={styles.projectTitle}>{e.title}</div>
						<div className={styles.projectDescription}>{e.description}</div>
			
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