import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className="main">
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
  )
}

export default Home
