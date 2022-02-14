import React from 'react'
import Categories from '../../components/Categories'
import PostCard from '../../components/PostCard'
import { getCategories, getCategoryPost } from '../../services'

const CategoryPost = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 pb-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((posts, index) => (
            <PostCard post={posts.node} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPost

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)
  return {
    props: { posts },
  }
}
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
