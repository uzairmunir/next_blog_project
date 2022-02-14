import Image from 'next/image'
import React from 'react'

const Author = ({ author }) => {
  return (
    <div className="relative mt-16 mb-8 rounded-lg bg-black bg-opacity-20 p-6 text-center">
      <div className="absolute -top-14 left-0 right-0">
        <Image
          unoptimized
          src={author.photo.url}
          height="100px"
          width="100px"
          className="object-cover object-top py-6"
        />
      </div>
      <h3 className="mt-6 text-2xl text-white">{author.name}</h3>
      <h4 className="py-4 text-xl text-white">{author.bio}</h4>
    </div>
  )
}

export default Author
