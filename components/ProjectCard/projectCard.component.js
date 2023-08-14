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
        <Link  href={e.link} target="_" className={`${styles.card} rounded my-2 text-decoration-none text-center`} key={idx}>
          <div className="d-flex justify-content-end">
            <FiGithub size={20} className={styles.gitIcon} />
          </div>

          <Image className={`rounded ${styles.cover}`} unoptimized src={e.img} width={330} />
          <h3 style={{ textAlign: "left" }} className="pt-4">{e.title}</h3>
          <p style={{  textAlign: "left", fontSize: "18px" }}>{e.desc}</p>
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
