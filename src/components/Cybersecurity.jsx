import React from 'react'
import blogs from '../data/blogsData'
import Blogcard from './Blogcard'

const Cybersecurity = () => {
  const cyberSecurityBlogs = blogs.filter((blog)=>
    blog.domain==="Cyber Security"
  )
  return (
    <div className='allBlog'>
      {
        cyberSecurityBlogs.map((blog)=>(
          <Blogcard key={blog.id} blog={blog}/>
        ))
      }
      
    </div>
  )
}

export default Cybersecurity
