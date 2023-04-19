import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Build time:&nbsp;
          
          <code className={styles.code}>{process.env.BUILD_TIME}</code>
          
        </p>
      </div>


      <div className={styles.grid}>
        <a
          href="/search"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Search weather <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Client Side weather search
          </p>
        </a>

        <a
          href="/forecast"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Forecast <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Server-side generation of Rome weather forecast
          </p>
        </a>
      </div>
    </main>
  )
}
