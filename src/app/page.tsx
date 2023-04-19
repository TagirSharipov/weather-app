import Image from 'next/image'
import Link from 'next/link'
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
        <Link
          href="/search"
          className={styles.card}
        >
          <h2 className={inter.className}>
            Search weather <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Client Side weather search
          </p>
        </Link>

        <Link
          href="/forecast"
          className={styles.card}
        >
          <h2 className={inter.className}>
            Forecast <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Server-side generation of Rome weather forecast
          </p>
        </Link>
      </div>
    </main>
  )
}
