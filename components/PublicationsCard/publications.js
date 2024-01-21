import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import styles from "@styles/publications.module.css";
import Link from "next/link";
import publications from "@data/publications";

const Publications = () => {

	return (
		<React.Fragment>
			{
				publications.map((e, idx) => (
					<div key={idx} className={styles.homepageArticle}>
						<div className={styles.homepageArticleContent}>
							<div className={styles.homepageArticleDate}>
								|&nbsp;&nbsp;&nbsp;{e.date}
								<span className={`${styles.badge}`}>
									{e.type}
								</span>
							</div>
							<div>
								<span className={styles.projectLink}>
								<span className={styles.homepageArticleTitle}>{e.title}</span>
									<Link className={styles.homepageArticleLink} href={e.link} target="_">
										<div className={styles.projectLinkIcon}>
											<FontAwesomeIcon icon={faLink} />
										</div>
									</Link></span></div>
							<div className={styles.homepageArticleDescription}>
								{e.description}
							</div>
			


						</div>
					</div>
				))
			}

		</React.Fragment >
	);
};

export default Publications;