import React from "react";
import { motion } from "framer-motion";
import styles from "./section.module.scss";

function Section({
  title,
  name,
  name1,
  name2,
  text,
  text1,
  text2,
  logo,
  logo1,
  logo2,
}) {
  return (
    <section className={styles.about}>
      <div className={styles.about__section}>
        <h1 className={styles.about__section__title}>{title}</h1>
        <div className={styles.about__section__block}>
          <motion.div
            initial={{ y: -120 }}
            whileInView={{ y: 0 }}
            className={styles.about__section__block__box}
          >
            <h4>{name}</h4>
            {logo}
            <p>{text}</p>
          </motion.div>
          <motion.div
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            className={styles.about__section__block__box}
          >
            <h4>{name1}</h4>
            {logo1}
            <p>{text1}</p>
          </motion.div>
          <motion.div
            initial={{ y: -120 }}
            whileInView={{ y: 0 }}
            className={styles.about__section__block__box}
          >
            <h4>{name2}</h4>
            {logo2}
            <p>{text2}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section;
