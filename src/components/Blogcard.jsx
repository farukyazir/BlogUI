import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogcard = ({blog}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => (navigate(`/blog/${blog.id}`))} className='blog-card'>
      <img src={blog.img} alt={blog.title}/>
      <p>{blog.title}</p>
    </div>
  )
}

export default Blogcard
