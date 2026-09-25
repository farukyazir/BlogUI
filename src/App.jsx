import React from 'react'
import './App.css'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import All from './components/All'
import Ai from './components/Ai'
import Cybersecurity from './components/Cybersecurity'
import Datascience from './components/Datascience'
import Fullstackdev from './components/Fullstackdev'
import Error from './components/Error'
import Blog from './components/blog'

const App = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Template/>,
            errorElement:<Error/>,
            children:[
                {
                    path:"/",
                    element:<All/>
                },
                {
                    path:"fullstack",
                    element:<Fullstackdev/>
                },
                {
                    path:"datascience",
                    element:<Datascience/>
                },
                {
                    path:"cybersecurity",
                    element:<Cybersecurity/>
                },
                {
                    path:"ai",
                    element:<Ai/>
                },
            ]
        },
        {
            path:"/blog/:id",
            element:<Blog/>
        }
    ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
