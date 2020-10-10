import { useEffect, useState } from 'react'
import Link from 'next/link'
import { baseUrl } from '../constants'
import MainLayout from '../components/MainLayout'

const Posts = ({ posts: serverPosts }) => {
  console.log(serverPosts)
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${baseUrl}/posts`)
      const posts = await res.json()
      setPosts(posts)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  return (
    <MainLayout title="Posts">
      <div className="main">
        {!posts ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>Posts Page</h1>
            <ul>
              {posts.map(({ id, title }) => (
                <li key={id}>
                  <Link href="/post/[id]" as={`/post/${id}`}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null }
  }

  const res = await fetch(`${baseUrl}/posts`)
  const posts = await res.json()
  return { posts }
}

// export const getServerSideProps = async (ctx) => {
//   const res = await fetch(`${baseUrl}/posts`)
//   const posts = await res.json()
//   return { props: { posts } }
// }

export default Posts
