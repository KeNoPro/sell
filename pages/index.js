import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>skinet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://top-level-domain.skinet.hns.to/">the Top-Level-Domain - skinet!</a>
        </h1>

        <p className={styles.description}>
          It could be yours
        </p>

        <div className={styles.grid}>
          <a href="https://www.namebase.io/domains/skinet" className={styles.card}>
            <h3>Buy &rarr;</h3>
            <p>You can buy this Top-Level-Domain on namebase.io.</p>
          </a>

          <a href="https://www.youtube.com/watch?v=FMsEgf3sb68" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Why RENT subdomains when you can OWN top-level domains?</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=iVLuIVJaFz0&t=142s"
            className={styles.card}
          >
            <h3>Create &rarr;</h3>
            <p>How to Create a Handshake Website with Vercel.</p>
          </a>

          <a
            href="https://learn.namebase.io/"
            className={styles.card}
          >
            <h3>Access &rarr;</h3>
            <p>
              How to Use and Access Handshake Names.
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
