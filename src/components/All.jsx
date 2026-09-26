import React from 'react'
import Blogcard from './Blogcard'
import blogs from '../data/blogsData'
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
