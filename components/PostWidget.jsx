import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ slug, categories }) => {
  const [postsData, setPostsData] = useState([])
  useEffect(async () => {
    if (slug) {
      const data = await getSimilarPosts(categories, slug)
      setPostsData(data)
    } else {
      const data = await getRecentPosts()
      setPostsData(data)
    }
  }, [slug])

  return (
    <div className="mt-4 rounded-lg bg-white p-8 pb-12 shadow-lg ">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold transition duration-500 hover:text-pink-500">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {postsData.map((post, index) => (
        <div
          key={index}
          className={`mb-4 flex pb-4 ${
            index === postsData.length - 1 ? 'border-b-0' : 'border-b'
          }`}
        >
          <img
            src={post.featureImage.url}
            alt={post.title}
            style={{ height: '50px', width: '50px' }}
            className="rounded-full object-cover"
          />
          <div className="ml-6 block align-middle">
            <p className="align-middle">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <h4 className="text-md hover:text-pink-500">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
