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
    <>
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
              <img src={TodoList} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://phenomenal-pastelito-8a7bd1.netlify.app/"}
                >
                  Todo-List
                </Link>
              </article>
            </motion.div>
            <motion.div initial={{y:500}} whileInView={{y:0}} transition={{duration:.2}} className={styles.projects__block__box}>
              <img src={Burger} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://mrsupremekun.github.io/burger/"}
                >
                  D-Burger
                </Link>
              </article>
            </motion.div>
            <motion.div initial={{y:-500}} whileInView={{y:0}} transition={{duration:.5}} className={styles.projects__block__box}>
              <img src={Grayson} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"mrsupremekun.github.io/grayson/"}
                >
                  Grayson
                </Link>
              </article>
            </motion.div>
            <motion.div initial={{y:500}} whileInView={{y:0}} transition={{duration:.7}} className={styles.projects__block__box}>
              <img src={Nike} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://mrsupremekun.github.io/nike/"}
                >
                  Nike
                </Link>
              </article>
            </motion.div>
            <motion.div initial={{y:-500}} whileInView={{y:0}} transition={{duration:.9}} className={styles.projects__block__box}>
              <img src={Eating} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://mrsupremekun.github.io/eating/"}
                >
                  Eating
                </Link>
              </article>
            </motion.div>
          </div>
        </section>

        <section className={styles.projects}>
          <h1>My Projects (Pt2)</h1>
          <div  className={styles.projects__block}>
            <motion.div initial={{x:-120}} whileInView={{x:0}}  className={styles.projects__block__box}>
              <img src={Company} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://mrsupremekun.github.io/supreme-arema/"}
                >
                  My Company
                </Link>
              </article>
            </motion.div>
            <motion.div initial={{y:-120}} whileInView={{y:0}} className={styles.projects__block__box}>
              <img src={Titanic} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://mrsupremekun.github.io/titanic/"}
                >
                  Titanic
                </Link>
              </article>
            </motion.div>
            <div className={styles.projects__block__box}>
              <img src={Apple} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://mrsupremekun.github.io/apple/"}
                >
                  Apple
                </Link>
              </article>
            </div>
            <motion.div initial={{y:120}} whileInView={{y:0}}  className={styles.projects__block__box}>
              <img src={Movie} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://deluxe-blini-868b0e.netlify.app"}
                >
                  Ciniphile
                </Link>
              </article>
            </motion.div>
            <motion.div initial={{x:120}} whileInView={{x:0}} className={styles.projects__block__box}>
              <img src={Parfume} alt="" />
              <article className={styles.GitName}>
                <Link
                  className={styles.projects__block__box_link}
                  to={"https://mrsupremekun.github.io/Parfume/"}
                >
                 Parfume
                </Link>
              </article>
            </motion.div>
          </div>
        </section>

        

      </div>
    </>
  );
}

export default Portfolio;
