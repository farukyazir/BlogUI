import React from 'react'
import blogs from '../data/blogsData'
import Blogcard from './blogcard'

const Fullstackdev = () => {
  const fullstackBlogs = blogs.filter((blog)=>
    blog.domain==="Full Stack Development"
  )
  return (
    <div className='allBlog'>
      {
        fullstackBlogs.map((blog)=>(
          <Blogcard key={blog.id} blog={blog}/>
        ))
      }
      
    </div>
  )
}

export default Fullstackdev
