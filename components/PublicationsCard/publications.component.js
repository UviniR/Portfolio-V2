"use client";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import styles from "@styles/publications.module.css";
import Link from "next/link";
import publications from "@data/publications";

const Publications = (props) => {
	const [isLight, setIsLight] = useState(props.isLight)

	useEffect(() => {
		setIsLight(props.isLight)
	},[props])

	return (
		<React.Fragment>
			{
				publications.map((e, idx) => (
					<div key={idx} className={isLight? styles.homepageArticle : styles.homepageArticleDark}>
						<div className={styles.homepageArticleContent}>
							<div className={isLight? styles.homepageArticleDate : styles.homepageArticleDateDark}>
								|&nbsp;&nbsp;&nbsp;{e.date}
								<span className={`${styles.badge}`}>
									{e.type}
								</span>
							</div>
							<div>
								<span className={isLight? styles.projectLink:styles.projectLinkDark}>
								<span className={isLight? styles.homepageArticleTitle : styles.homepageArticleTitleDark}>{e.title}</span>
									<Link className={isLight? styles.homepageArticleLink:styles.homepageArticleLinkDark} href={e.link} target="_">
										<div className={styles.projectLinkIcon}>
											<FontAwesomeIcon icon={faLink} />
										</div>
									</Link></span></div>
							<div className={isLight? styles.homepageArticleDescription:styles.homepageArticleDescriptionDark}>
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