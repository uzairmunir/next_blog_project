import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/index'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(async () => {
    const data = await getCategories()
    setCategories(data)
  }, [])
  return (
    <div className="mt-4 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold transition duration-500 hover:text-pink-500 ">
        Categories
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`block cursor-pointer py-4 hover:text-pink-500 ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            }`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
