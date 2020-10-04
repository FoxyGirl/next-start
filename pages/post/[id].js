import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  console.log('router', router)

  return (
    <div className="main">
      <h1>Post Page {router.query.id}</h1>
    </div>
  )
}

export default Post
