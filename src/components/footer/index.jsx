import React from "react";
import styles from "./footer.module.scss";
import facebook from '../../images/facebook 1.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__1}>
        <h4 className={styles.footer__heading}>P.</h4>
        <p className={styles.footer__text1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
          nunc aliquam tincidunt est non.
        </p>
        <div className={styles.footer__img_div}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
        </div>
      </div>
      <div className={styles.footer__2}>
        <h4 className={styles.footer__heading}>Pages</h4>
        <p className={styles.footer__text}>Home</p>
        <p className={styles.footer__text}>About</p>
        <p className={styles.footer__text}>Service</p>
        <p className={styles.footer__text}>Portfolio</p>
        <p className={styles.footer__text}>Blog</p>
       </div>
      <div className={styles.footer__3}>
        <h4 className={styles.footer__heading}>Services</h4>
        <p className={styles.footer__text}>Web Design</p>
        <p className={styles.footer__text}>App Design</p>
        <p className={styles.footer__text}>Dashboard</p>
        <p className={styles.footer__text}>Illustration</p>
        <p className={styles.footer__text}>Development</p>
       </div>
      <div className={styles.footer__4}>
        <h4 className={styles.footer__heading}>Contact</h4>
        <p className={styles.footer__text}>+00 88 999 888 22</p>
        <p className={styles.footer__text}>example@gmail.com</p>
        <p className={styles.footer__text}>www.portfolio.com</p>
        <p className={styles.footer__text}>44, Housing State, 3200</p>
       </div>
      
      
    </footer>
  );
}

export default Footer;
