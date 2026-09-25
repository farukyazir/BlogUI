import React from 'react'
import blogs from '../data/blogsData'
import Blogcard from './blogcard'

const Datascience = () => {
  const dataScienceBlogs = blogs.filter((blog)=>
    blog.domain==="Data Science"
  )
  return (
    <div className='allBlog'>
      {
        dataScienceBlogs.map((blog)=>(
          <Blogcard key={blog.id} blog={blog}/>
        ))
      }
      
    </div>
  )
}

export default Datascience
