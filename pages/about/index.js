import Router from 'next/router'
import { baseUrl } from '../../constants'
import MainLayout from '../../components/MainLayout'

const About = ({ about }) => {
  const handlerGoHome = () => {
    Router.push('/')
  }

  console.log('about', about)
  const { title } = about || {}

  return (
    <MainLayout title="About">
      <div className="main">
        <h1>{title}</h1>
        <button onClick={handlerGoHome}>Go back to Home</button>
        <button onClick={() => Router.push('/posts')}>Go back to Posts</button>
      </div>
    </MainLayout>
  )
}

// About.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { about: null }
//   }

//   const res = await fetch(`${process.env.API_URL}/about`)
//   const about = await res.json()
//   return { about }
// }

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`${process.env.API_URL}/about`)
  const about = await res.json()
  return { props: { about } }
}

export default About
