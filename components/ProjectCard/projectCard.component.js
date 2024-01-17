import React from "react";
import styles from "@styles/project.module.css";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import projects from "@data/projects";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <>
      {projects.map((e, idx) => (
        <div className={`col-lg-4 my-3 my-lg-0`} key={idx}>
          <Link href={e.link} target="_" className={`${styles.card} h-100 card rounded my-2 text-decoration-none text-center`}>
            <div className="d-flex justify-content-end">
              <FiGithub size={20} className={styles.gitIcon} />
            </div>
            <Image className={`rounded ${styles.cover}`} src={e.img} alt="projects" />
            <h3 className={`pt-4 text-start ${styles.largeText}`}>
              {e.title}
            </h3>
            <p style={{ fontSize: "18px", textAlign: "left" }} className={styles.smallText}>{e.desc}</p>
            <div className={`${styles.badgeRow} d-flex flex-wrap justify-content-start`}>
              {e.technologies.map((t, i) => (
                <span className={`${styles.badge}`} key={i}>
                  {t}
                </span>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
