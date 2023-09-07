import React from "react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import { FaKeyboard, FaHtml5 } from "react-icons/fa";
import PortfolioImg from "../../images/PortfolioImg.jpg";
import TodoList from "../../images/TodoList.jpg";
import Burger from "../../images/Burger.jpg";
import Grayson from "../../images/Grayson.jpg";
import Nike from "../../images/Nike.jpg";
import Eating from "../../images/Eating.jpg";
import Company from "../../images/Company.jpg";
import Apple from "../../images/Apple.jpg";
import Titanic from "../../images/Titanic.jpg";
import Movie from "../../images/Movie.jpg";
import Parfume from "../../images/Parfume.jpg";
import styles from "../home/home.module.scss";

function Portfolio() {
  return (
      <div className="container">

        <section className={styles.intro}>
          <div className={styles.intro__textarea}>
            <motion.h1 initial={{x:-300}} whileInView={{x:0}} className={styles.intro__textarea__name}>
              <span>Portfolio </span>WebPage
            </motion.h1>
          </div>

          <div className={styles.intro__images}>
            <div className={styles.intro__images__icon}>
              <FaKeyboard />
            </div>
            <img src={PortfolioImg} alt="" className={styles.intro__bg} />
            <div className={styles.intro__images__icon1}>
              <FaHtml5 />
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <h1>My Projects</h1>
          <div className={styles.projects__block}>
            <motion.div initial={{y:-500}} whileInView={{y:0}} transition={{duration:.1}}  className={styles.projects__block__box}>
              <Link  to={"https://phenomenal-pastelito-8a7bd1.netlify.app/"}><img src={TodoList} alt="" /></Link>
              <article className={styles.GitName}>Todo-List</article>
            </motion.div>
            <motion.div initial={{y:500}} whileInView={{y:0}} transition={{duration:.2}} className={styles.projects__block__box}>
              <Link  to={"https://mrsupremekun.github.io/burger/"}><img src={Burger} alt="" /></Link>
              <article className={styles.GitName}>D-burger</article>
            </motion.div>
            <motion.div initial={{y:-500}} whileInView={{y:0}} transition={{duration:.5}} className={styles.projects__block__box}>
              <Link   to={"mrsupremekun.github.io/grayson/"}><img src={Grayson} alt="" /></Link>
              <article className={styles.GitName}>Grayson</article>
            </motion.div>
            <motion.div initial={{y:500}} whileInView={{y:0}} transition={{duration:.7}} className={styles.projects__block__box}>
              <Link to={"https://mrsupremekun.github.io/nike/"} ><img src={Nike} alt="" /></Link>
              <article className={styles.GitName}>Nike</article>
            </motion.div>
            <motion.div initial={{y:-500}} whileInView={{y:0}} transition={{duration:.9}} className={styles.projects__block__box}>
              <Link to={"https://mrsupremekun.github.io/eating/"} ><img src={Eating} alt="" /></Link>
              <article className={styles.GitName}>Eating</article>
            </motion.div>
          </div>
        </section>

        <section className={styles.projects}>
          <h1>My Projects (Pt2)</h1>
          <div  className={styles.projects__block}>
            <motion.div initial={{x:-120}} whileInView={{x:0}}  className={styles.projects__block__box}>
             <Link to={"https://mrsupremekun.github.io/supreme-arema/"}><img src={Company} alt="" /></Link> 
              <article className={styles.GitName}>My Company </article>
            </motion.div>
            <motion.div initial={{y:-120}} whileInView={{y:0}} className={styles.projects__block__box}>
              <Link to={"https://mrsupremekun.github.io/titanic/"}><img src={Titanic} alt="" /></Link>
              <article className={styles.GitName}>Titanic</article>
            </motion.div>
            <div className={styles.projects__block__box}>
              <Link to={"https://mrsupremekun.github.io/apple/"} ><img src={Apple} alt="" /></Link>
              <article className={styles.GitName}>Apple</article>
            </div>
            <motion.div initial={{y:120}} whileInView={{y:0}}  className={styles.projects__block__box}>
              <Link to={"https://deluxe-blini-868b0e.netlify.app"} ><img src={Movie} alt="" /></Link>
              <article className={styles.GitName}>Ciniphile</article>
            </motion.div>
            <motion.div initial={{x:120}} whileInView={{x:0}} className={styles.projects__block__box}>
              <Link to={"https://mrsupremekun.github.io/Parfume/"} ><img src={Parfume} alt="" /></Link>
              <article className={styles.GitName}>Parfume</article>
            </motion.div>
          </div>
        </section>

        

      </div>
  );
}

export default Portfolio;
