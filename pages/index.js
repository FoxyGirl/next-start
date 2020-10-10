import Link from 'next/link'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <MainLayout title="Next project">
      <div>
        <h1>Hello Home Page</h1>
      </div>
    </MainLayout>
  )
}

export default Home
