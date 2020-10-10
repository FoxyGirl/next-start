import { useState, useEffect } from 'react'
import MainLayout from '../components/MainLayout'

const baseUrl = 'http://localhost:4200'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const load = async () => {
      const response = await fetch(`${baseUrl}/posts`)
      const loadedPosts = await response.json()

      setPosts(loadedPosts)
    }

    load()
  }, [])

  return (
    <MainLayout title="Posts">
      <div className="main">
        <h1>Posts Page</h1>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    </MainLayout>
  )
}

export default Posts
