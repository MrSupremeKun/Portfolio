import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { GrContactInfo } from "react-icons/gr";
import ContactImg from "../../images/ContactImg.jpg";
import Luffy from "../../images/Luffy.jpg";
import styles from "../home/home.module.scss";
import { BiLogoTelegram, BiLogoInstagram } from "react-icons/bi";

function Contact() {
  return (
    <>
      <div className="container">
        <section className={styles.intro}>
          <div className={styles.intro__textarea}>
            <h1 className={styles.intro__textarea__name}>
              Don't be hositate,<span>Contact me</span>
            </h1>
          </div>
          <div className={styles.intro__images}>
            <div className={styles.intro__images__icon}>
              <BiSolidContact />
            </div>
            <img src={ContactImg} alt="" className={styles.intro__bg} />
            <div className={styles.intro__images__icon1}>
              <GrContactInfo />
            </div>
          </div>
        </section>

        <section className={styles.media}>
          <div className={styles.media__block}>
            <div className={styles.media__block__box}>
              <BiLogoTelegram />
              <article className={styles.media__block__box__article}>
                Telegram
              </article>
            </div>
            <div className={styles.media__block__box}>
              <BiLogoInstagram />
              <article className={styles.media__block__box__article}>
                Instagram
              </article>
            </div>
          </div>
        </section>

        <section  className="email">
          <div  className="email__block">
            <div className="email__block__textarea">
              <div className="email__block__textarea__input">
                <input type="text" placeholder="Your Name" required />
                <input type="text" placeholder="Your Email" required />
              </div>
              <textarea placeholder="Massage" name="Massage Me" id="" cols="55" rows="10"></textarea>
              <button>Send</button>
            </div>
            <div className="img">
              <img src={Luffy} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
