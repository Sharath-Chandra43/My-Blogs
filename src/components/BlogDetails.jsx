import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../CustomHooks/useFetch'
import '.././index.css'

const BlogDetails = () => {
    const {id}=useParams()
    const {Customdata:blog,loading}=useFetch('http://localhost:3002/blogs/'+id)
    const navigate=useNavigate();

    const handleDelete=()=>{
        fetch(`http://localhost:3002/blogs/${blog.id}`,{
            method:'DELETE',
        }).then(()=>{
            console.log("deleted the blog")
            navigate('/')
        })

    }

  return (

    <div className='blog-details'>
        
       {loading && <div>Loading....</div>}

       {blog && (
        <article>
            <h2 className='blog-title'>{blog.title}</h2>
            <p className='blog-author'>written by {blog.author}</p>
            <div className='blog-body'>{blog.body}</div>
            <button className="delete-btn" onClick={handleDelete}>
                    <i className="fa fa-trash"></i> Delete
            </button>
        </article>
       )}
    </div>
  )
}

export default BlogDetails