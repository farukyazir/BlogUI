import React from 'react'
import Header from './Header'
import { useNavigate, useParams } from 'react-router-dom'
import blogs from '../data/blogsData'

const Blog = () => {
  const {id} = useParams()
  const navigate=useNavigate()
  const blog = blogs.find((blog)=>(blog.id=== Number(id)))
  return (
    <>
    <Header/>
    <div className='blog-container'>
      <div className='blog-heading'>
        <h1>{blog.title}</h1>
        <button onClick={() => navigate(-1)} className='btn'>Back</button>
      </div>
      <div className='blog-innercontainer'>
        <img src={blog.img} />
        <div className='blogcontent'>
          <p>{blog.title}</p>
          <p>{blog.content}</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
    </>    
  )
}

export default Blog
