import React from 'react'
import styles from './navbar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { navbarData } from '../../helpers/NavLinkHelper'
function index() {
  return (
    <nav 
    className={styles.navbar}>
        <div className={styles.navbar__name}>
            <Link className={styles.navbar__name__link} to={"/"}>Supreme Arema</Link>
        </div>
        <div className={styles.navbar__links}>
            {
                navbarData.map((link)=>(
                    <NavLink
                    key={link.name}
                    to={link.path}
                    className={({isActive})=>
                    isActive ? 
                    classNames(styles.navbar__link, styles.navbar__link_active,)
                    : styles.navbar__link
                }
                >{link.name}</NavLink>
                ))
            }
        </div>
    </nav>
  )
}

export default index