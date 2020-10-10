import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { baseUrl } from '../../constants'
import MainLayout from '../../components/MainLayout'
import styles from '../../styles/Posts.module.scss'

const Post = ({ post: serverPost }) => {
  const router = useRouter()
  const [post, setPost] = useState(serverPost)

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${baseUrl}/posts/${router.query.id}`)
      const post = await res.json()
      setPost(post)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  const { title, body } = post || {}

  return (
    <MainLayout title={`Post: ${router.query.id}`}>
      <div className="main">
        {!post ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>{title}</h1>
            <hr />
            <p>{body}</p>
            <hr />
            <Link href="/posts">
              <a className={styles.link}>Back to all posts</a>
            </Link>
          </>
        )}
      </div>
    </MainLayout>
  )
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null }
  }

  const { id } = query
  const res = await fetch(`${baseUrl}/posts/${id}`)
  const post = await res.json()
  return { post }
}

export default Post
