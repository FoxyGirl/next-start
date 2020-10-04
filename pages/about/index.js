import Router from 'next/router'

const About = () => {
  const handlerGoHome = () => {
    Router.push('/')
  }

  return (
    <div className="main">
      <h1>About Page</h1>
      <button onClick={handlerGoHome}>Go back to Home</button>
      <button onClick={() => Router.push('/posts')}>Go back to Posts</button>
    </div>
  )
}

export default About
