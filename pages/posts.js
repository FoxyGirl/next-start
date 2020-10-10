import Link from 'next/link'
import { baseUrl } from '../constants'
import MainLayout from '../components/MainLayout'

const Posts = ({ posts }) => {
  return (
    <MainLayout title="Posts">
      <div className="main">
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
      </div>
    </MainLayout>
  )
}

Posts.getInitialProps = async (ctx) => {
  const res = await fetch(`${baseUrl}/posts`)
  const posts = await res.json()
  return { posts }
}

export default Posts
