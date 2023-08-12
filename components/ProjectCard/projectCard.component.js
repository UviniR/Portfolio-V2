import React from "react";
import styles from "@styles/page.module.css";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import projects from "@data/projects";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <>
      {projects.map((e, idx) => (
        <Link  href={""} target="_" className={`${styles.card} my-2 text-decoration-none`} key={idx}>
          <div className="d-flex justify-content-end">
            <FiGithub size={20} className={styles.gitIcon} />
          </div>
          <Image className={`card-img-top ${styles.cover}`} unoptimized src={e.img} width={200} height={299} />
          <h3 style={{ textAlign: "left" }}>{e.title}</h3>
          <p style={{ fontSize: "18px" }}>{e.desc}</p>
          <div className={styles.badgeRow}>
            {
                e.technologies.map((t, i) => (
                    <span className={`${styles.badge} badge`} key={i}>{t}</span>
                ))
            }
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProjectCard;
