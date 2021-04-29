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
            <p>Why RENT subdomains when you can OWN top-level domains? !</p>
          </a>

         


 
