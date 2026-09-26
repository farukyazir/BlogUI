import React from 'react'
import Blogcard from './blogcard'
import blogs from '../data/BlogsData'
const All = () => {
  return (
   <>
   <div className='allBlog'>
    {
        blogs.map((blog)=>(
         <Blogcard key={blog.id} blog={blog}/>
    ))
   }
   </div>
   </>
  )
}

export default All
