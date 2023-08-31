import React from "react";
import {motion} from "framer-motion"
import { TbWorldQuestion } from "react-icons/tb";
import { AiFillFileText } from "react-icons/ai";
import AboutImg from "../../images/AboutImg.jpg";
import AboutImg1 from "../../images/AboutImg1.jpg";
import Section from "../../components/section"
import styles from "../home/home.module.scss";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="container">
      <section className={styles.intro}>
          <div className={styles.intro__textarea}>
            <motion.h1 initial={{y:-200}} whileInView={{y:0}} className={styles.intro__textarea__name}>
              Some more information <span>about me</span>
            </motion.h1>
          </div>
          <div className={styles.intro__images}>
            <div className={styles.intro__images__icon}>
              <TbWorldQuestion />
            </div>
            <img src={AboutImg} alt="" className={styles.intro__bg} />
            <div className={styles.intro__images__icon1}>
              <AiFillFileText />
            </div>
          </div>
        </section>
        
        <section className={styles.header}>
          <div className={styles.header__section}>
            <div className={styles.header__section__textarea}>
              <h2>About Me</h2>
              <p>
              <span>Hello there,I'm a front-end developer</span>   with a passion for creating beautiful, interactive, and user-friendly websites. I specialize in responsive design and I am always on the lookout for the latest technologies and trends.
              </p>
              <button className="button">
            <Link to={"/contact"}>Contact Me</Link>
          </button>
            </div>
            <div className={styles.header__section__imgSection}>
              <img
                className={styles.header__section__imgSection_img}
                src={AboutImg1}
                alt=""
              />
            </div>
          </div>
        </section>

        <Section
        title="Languages that i use every time"
        name="Html"
        name1="Css"
        name2="Java Script (Js)"
        text="HTML stands for Hyper Text Markup Language . HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content."
        text1="CSS is the acronym of  “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css)."
        text2="JavaScript is a scripting language used to develop web pages . Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page."
        />

        <Section
        title="Libraries that i use every time"
        name="React (Js)"
        name1="Bootstrap"
        name2="Framer-Motion  "
        text="The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.27"
        text1="What is Bootstrap? Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs."
        text2="Framer Motion is a simple yet powerful motion library for React. It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed."
        />          

      </div>
    </div>
  );
}

export default About;




              
        
        