import React from "react";
import styles from "./statistic.module.scss";

function Statistic({ article }) {
  return (
    <div className="container">
      <div className={styles.statistic}>
        <h2 className={styles.statistic__article}>{article}</h2>
        <div className={styles.statistic__block}>
          <div className={styles.statistic__box}>
            <article className={styles.statistic__amount}>300+</article>
            <p className={styles.statistic__text}>Project Delivery</p>
          </div>
          <div className={styles.statistic__box}>
            <article className={styles.statistic__amount}>8</article>
            <p className={styles.statistic__text}>Years Experience</p>
          </div>
          <div className={styles.statistic__box}>
            <article className={styles.statistic__amount}>16</article>
            <p className={styles.statistic__text}>Awards</p>
          </div>
          <div className={styles.statistic__box}>
            <article className={styles.statistic__amount}>70+</article>
            <p className={styles.statistic__text}>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
