import React from 'react'
import { Link } from 'react-router-dom'

const BlogsList = (props) => {
  const {blogs}=props
 


  return (
    <div className='blogs-list'>
    {blogs.map((blog)=>(
      <div className='blog-preview' key={blog.id}>
      <Link  to={`/blogs/${blog.id}`}>
      <h2 className='blog-title'>{blog.title}</h2>
      <span>Written by <p className='blog-author'>{blog.author}</p>
      </span>
      </Link>
    </div>
      ))}
    </div>
  )
}

export default BlogsList