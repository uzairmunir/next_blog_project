import React from 'react'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import Categories from '../components/Categories'
import { getPosts } from '../services'

const index = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 pb-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: {
      posts,
    },
  }
}
