import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Next project</title>
        <meta name="charSet" content="utf-8" />
        <meta name="keywords" content="nextjs, javascript, react" />
        <meta name="description" content="This is test project with nextjs" />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <nav>
            <ul>
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
          <h1>Hello Home Page</h1>
        </div>
      </div>
    </>
  )
}

export default Home
