import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Navbar = () => {
  const [categories, setCategories] = useState([])
  useEffect(async () => {
    const data = await getCategories()
    setCategories(data)
  }, [])
  return (
    <div className="container mx-auto  mb-8 px-10">
      <div className=" inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white hover:text-pink-500 md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
