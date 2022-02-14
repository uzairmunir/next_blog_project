import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className=" mb-8 h-auto rounded bg-white p-0  shadow-lg lg:p-8">
      <div className="shadow:lg  relative overflow-hidden pb-80">
        <img
          src={post?.featureImage.url}
          alt="Feature Image"
          className="absolute mb-8 h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <div className="block text-center">
        <h3 className="mt-4 px-6 pb-6 text-3xl font-bold transition duration-500 hover:text-pink-500 lg:px-0">
          {post?.title}
        </h3>
        <div className=" mx-auto block justify-center pb-8 align-middle lg:flex">
          <div className="flex justify-center">
            <img
              src={post.author.photo.url}
              style={{ height: '30px', width: '30px' }}
              className="rounded-full align-middle "
              alt="Author Image"
            />
            <h3 className="px-4 align-middle text-lg  text-gray-700">
              {post.author.name}
            </h3>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <h3 className="px-8 pb-8 text-lg text-gray-700">{post.excerpt}</h3>
        <button className="ease mb-6 inline-block transform cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1 lg:mb-0">
          <Link href={`/post/${post.slug}`}>Continue Reading</Link>
        </button>
      </div>
    </div>
  )
}

export default PostCard
