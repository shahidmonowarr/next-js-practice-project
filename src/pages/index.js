import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello, Mono</h1>
      <Link href="/blog">
        <button>Blog</button>
      </Link>
    </div>
  )
}
