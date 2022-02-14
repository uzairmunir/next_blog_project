import React from 'react'
import { useState } from 'react'

const CommentsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    storeData: false,
  })
  const handleOnChange = (e) => {
    if (e.target.type === 'checked') {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.checked,
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  }
  return (
    <div className="lg-p-0 rounded-lg bg-white p-6 pb-6 shadow-lg">
      <h3 className="border-b py-4 text-2xl font-semibold">Leave a reply</h3>
      <div className="my-4 grid grid-cols-1 gap-4">
        <textarea
          value={formData.comment}
          name="comment"
          onChange={handleOnChange}
          placeholder="Comment"
          className="h-40 w-full rounded-lg bg-gray-100 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="my-4 grid grid-cols-2 gap-4">
        <input
          value={formData.name}
          name="name"
          onChange={handleOnChange}
          placeholder="Name"
          className=" w-full rounded-lg bg-gray-100 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleOnChange}
          placeholder="Email"
          className=" w-full rounded-lg bg-gray-100 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="mt-4 mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            checked={formData.storeData}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
            onChange={handleOnChange}
          />
          <label className="cursor-pointer text-gray-500" htmlFor="storeData">
            {' '}
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="button"
          className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:bg-indigo-900"
        >
          Post Comment
        </button>
        {/* {showSuccessMessage && (
          <span className='text-xl float-right font-semibold mt-3 text-green-500'>
            Comment submitted for review
          </span>
        )} */}
      </div>
    </div>
  )
}

export default CommentsForm
