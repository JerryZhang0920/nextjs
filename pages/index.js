import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FTC Team 16418</title>
        <link rel="icon" href="/LogoRobo_edited_edited.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://ftc16418.com">CPC Robotics</a>
        </h1>

        <p className={styles.description}>
          This is a landing page{' '}
          <code className={styles.code}>for ftc 2020</code>
        </p>

        <div className={styles.grid}>
          <a href="https://firstinspiresst01.blob.core.windows.net/first-game-changers/ftc/game-one-page.pdf" className={styles.card}>
            <h3>Documentation for the 2020-21 season &rarr;</h3>
            <p>Learn whats new in the FIRST TECH CHALLENGE 2020-21 season.</p>
          </a>

          <a href="https://www.youtube.com/watch?v=H3V3A7CgwPU" className={styles.card}>
            <h3>Game Video &rarr;</h3>
            <p>Watch the 2020-21 season game video!</p>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxiXFl36eOJUmaqxymyKalZsfllz05u5xlInlKKP5XzPM1SQ/viewform"
            className={styles.card}
          >
            <h3>Job Application Form &rarr;</h3>
            <p>Fill in the form so we know which job you are interested in.</p>
          </a>

          <a
            href="https://www.firstinspires.org/resource-library/ftc/game-and-season-info"
            className={styles.card}
          >
            <h3>Resource Library &rarr;</h3>
            <p>
              Resource Library has all the resources for the 2020-21 season.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
