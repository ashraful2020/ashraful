import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ashraful islam</title>
        <meta name="Ashraful Islam" content="Top rated freelancer in fiverr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://ashraful1.netlify.app/">My Site</a>
        </h1>

        <div className={styles.description}>

          <h2>Mohammad  <a href="https://ashraful1.netlify.app/" style={{ color: 'blue' }}>Ashraful </a> Islam </h2>
          <p className={styles.code}>Top rated freelancer on fiverr , and having many year of experience in web development and app development </p>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed By
          <span className={styles.logo} style={{color:"lightblue"}}>
            @Ashraful Islam
          </span>
        </a>
      </footer>
    </div>
  )
}
