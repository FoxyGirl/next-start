import Link from 'next/link'
import styles from '../styles/Home.module.css'

const ErrorPage = () => (
  <div className={styles.container}>
    <div className={styles.main}>
      <h1>Page not found</h1>
      <p>
        Please,{' '}
        <Link href="/">
          <a className={styles.superLink}>go back</a>
        </Link>{' '}
        to safety
      </p>
    </div>
  </div>
)

export default ErrorPage
