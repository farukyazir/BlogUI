import React from 'react'
import blogs from '../data/blogsData'
import Blogcard from './Blogcard'

const Ai = () => {
  const aiBlogs = blogs.filter((blog)=>
    blog.domain==="AI"
  )
  return (
    <div className='allBlog'>
      {
        aiBlogs.map((blog)=>(
          <Blogcard key={blog.id} blog={blog}/>
        ))
      }
    </div>
  )
}

export default Ai
