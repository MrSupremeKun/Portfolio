import React from 'react'
import styles from './notfound.module.scss'
import { Link } from 'react-router-dom'

function NotFound() {
  return (

      <section className={styles.notFound}>
        <h1>404</h1>
        <div className={styles.notFound__textarea}>
        <p>something went wrong</p>
        <Link to={"/"}>Go Back</Link>
         </div>
      </section>

  )
}

export default NotFound