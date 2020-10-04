import Router from 'next/router'
import MainLayout from '../../components/MainLayout'

const About = () => {
  const handlerGoHome = () => {
    Router.push('/')
  }

  return (
    <MainLayout title="About">
      <div className="main">
        <h1>About Page</h1>
        <button onClick={handlerGoHome}>Go back to Home</button>
        <button onClick={() => Router.push('/posts')}>Go back to Posts</button>
      </div>
    </MainLayout>
  )
}

export default About
