import React from "react";
import { AiFillHome, AiOutlineEye } from "react-icons/ai";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { GiEyeShield } from "react-icons/gi";
import styles from "./services.module.scss";
function Services() {
  return (
    <div>
      <h3 className={styles.article}>Services</h3>
      <h1 className={styles.heading}>
        Building Digital Product With Better Experience
      </h1>
      <div className={styles.block}>
        <div className={styles.box}>
          <AiFillHome />
          <h2 className={styles.box__heading}>UI/UX Design</h2>
          <p className={styles.box__text}>
            I’ve created a user interface and user experience with some proccess
            and method.
          </p>
        </div>
        <div className={styles.box}>
          <MdOutlineDesktopWindows />
          <h2 className={styles.box__heading}>Web Development</h2>
          <p className={styles.box__text}>
            I’ve created a user interface and user experience with some proccess
            and method.
          </p>
        </div>
        <div className={styles.box}>
          <AiOutlineEye />
          <h2 className={styles.box__heading}>Visual Branding</h2>
          <p className={styles.box__text}>
            I’ve created a user interface and user experience with some proccess
            and method.
          </p>
        </div>
        <div className={styles.box}>
          <GiEyeShield />
          <h2 className={styles.box__heading}>App Development</h2>
          <p className={styles.box__text}>
            I’ve created a user interface and user experience with some proccess
            and method.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
