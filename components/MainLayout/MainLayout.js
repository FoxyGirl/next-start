import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/MainLayout.module.scss'

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Next project</title>
        <meta name="charSet" content="utf-8" />
        <meta name="keywords" content="nextjs, javascript, react" />
        <meta name="description" content="This is test project with nextjs" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav>
            <ul className={styles.mainNav}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a>Posts</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  )
}

export default MainLayout
