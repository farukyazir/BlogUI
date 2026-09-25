import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <div className="navbar">
      <Link className={location.pathname === "/" ? "active" : ""} to="/">
        All
      </Link>

      <Link className={location.pathname === "/fullstack" ? "active" : ""} to="/fullstack">
        Full Stack Development
      </Link>

      <Link className={location.pathname === "/datascience" ? "active" : ""} to="/datascience">
        Data Science
      </Link>

      <Link className={location.pathname === "/cybersecurity" ? "active" : ""} to="/cybersecurity">
        Cyber Security
      </Link>

      <Link className={location.pathname === "/ai" ? "active" : ""} to="/ai">
        AI
      </Link>
    </div>
  )
}

export default Navbar