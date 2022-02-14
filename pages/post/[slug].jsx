import React from 'react'
import PostWidget from '../../components/PostWidget'
import Categories from '../../components/Categories'
import PostDetail from '../../components/PostDetail'
import { getPostDetails, getPosts } from '../../services'
import Author from '../../components/Author'
import CommentsForm from '../../components/CommentsForm'

const PostDetails = ({ post }) => {
  console.log(post)
  return (
    <div className="container mx-auto px-10 pb-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const post = await getPostDetails(params.slug)
  return {
    props: { post },
  }
}
export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
