import { useRouter } from 'next/router'
import Link from 'next/link'
import { baseUrl } from '../../constants'
import MainLayout from '../../components/MainLayout'
import styles from '../../styles/Posts.module.scss'

const Post = ({ post }) => {
  const router = useRouter()

  const { title, body } = post

  return (
    <MainLayout title={`Post: ${router.query.id}`}>
      <div className="main">
        <h1>{title}</h1>
        <hr />
        <p>{body}</p>
        <hr />
        <Link href="/posts">
          <a className={styles.link}>Back to all posts</a>
        </Link>
      </div>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  const res = await fetch(`${baseUrl}/posts/${id}`)
  const post = await res.json()
  return { post }
}

export default Post
