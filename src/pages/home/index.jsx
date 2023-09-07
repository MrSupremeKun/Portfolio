import React from "react";
import {  motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeadphones, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import {MdOutlineDesignServices} from "react-icons/md"
import {DiResponsive} from "react-icons/di"
import {BsFillEyeFill} from "react-icons/bs" 
import MyPicutre from "../../images/MyPicutre3.jpg";
import Bg from "../../images/HeaderBg.jpg";
import Section from "../../components/section";
import styles from "./home.module.scss";

function Home() {
  return (
 
     <div className="container">
        <section className={styles.intro}>
          <div className={styles.intro__textarea}>
            <motion.h1
            transition={{duration:1}}
            initial={{y:-200}}
            animate={{y:0}}
             className={styles.intro__textarea__name}>
              Hi, i'm <span>Umarov Hojiakbar</span>
            </motion.h1>
          </div>
          <div className={styles.intro__images}>
            <div className={styles.intro__images__icon}>
              <FaHeadphones />
            </div>
            <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:.7}} src={Bg} alt="" className={styles.intro__bg} />
            <div className={styles.intro__images__icon1}>
              <FaLaptopCode />
            </div>
          </div>
        </section>

        <section className={styles.header}>
          <div className={styles.header__section}>
            <motion.div
              initial={{ x: -70 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileInView={{ x: 0 }}
              className={styles.header__section__textarea}
            >
              <h2>I'm Front-End Programmer</h2>
              <p>
                <span>Front-End Programmer</span> with medium front-end skills
                and interests to programming, i offer projects with the best
                results{" "}
              </p>
              <Link
                className={styles.header__section__textarea__link}
                to={"/about"}
              >
                About Me?
                <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 70 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileInView={{ x: 0 }}
              className={styles.header__section__imgSection}
            >
              <img
                className={styles.header__section__imgSection_img}
                src={MyPicutre}
                alt=""
              />
            </motion.div>
          </div>
        </section>

        <Section
          title="My Webiste Design"
          name="Intuitive Design"
          name1="Responsive Layout"
          name2="Minimalism Aesthetic"
          text="My portfolio website is designed to be user-friendly and easy
          to navigate. I use a clean, modern layout with clear calls to
          action to guide users through the site and showcase my work"
          text1="
          My website is designed to be responsive and accessible on all devices, from desktop to mobile. Whether you're browsing from your laptop or your phone, you'll be able to easily access my portfolio and view my work."
          text2="
          I believe that less is more, and my portfolio website reflects that philosophy. I use a minimalist aesthetic in my design, which allows my work to take center stage and shine."
          logo={<BsFillEyeFill/>}
          logo1={<DiResponsive/>}
          logo2={<MdOutlineDesignServices/>}
        
        />
      </div>
  );
}

export default Home;
