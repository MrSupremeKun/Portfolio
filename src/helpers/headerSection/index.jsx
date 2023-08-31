import React from "react";
import CommentImg from "../../images/Ellipse 1.png";
import Businnesman from "../../images/businessman-black-suit-makes-thumb-up-sign-removebg-preview 1.png";
import styles from "./section.module.scss";

function Section({ text, name, job }) {
  return (
    <div className={styles.father}>
      <img
              src={Businnesman}
              alt=""
              className={styles.section_img}
            />
    <div className={styles.section}>
      <p className={styles.section_text}>{text}</p>
      <div className={styles.section_about}>
        <div className={styles.section_about_img}>
          <img src={CommentImg} alt="face" />
        </div>

        <div className={styles.section_eloborate}>
          <p className={styles.section_name}>{name}</p>
          <p className={styles.section_job}>{job}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Section;
