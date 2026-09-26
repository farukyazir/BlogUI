import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const location = useLocation()
  const [showMenu,setshowMenu]=useState(false)

  return (
    <>
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
    <div className='mobile-menu'>
      <button onClick={()=>setshowMenu(!showMenu)}><FontAwesomeIcon icon={faEllipsisVertical} /></button>
      {showMenu &&(
        <div className="mobile-domains">
            <Link to="/" onClick={() => setshowMenu(false)}>
              All
            </Link>

            <Link to="/fullstack" onClick={() => setshowMenu(false)}>
              Full Stack Development
            </Link>

            <Link to="/datascience" onClick={() => setshowMenu(false)}>
              Data Science
            </Link>

            <Link to="/cybersecurity" onClick={() => setshowMenu(false)}>
              Cyber Security
            </Link>

            <Link to="/ai" onClick={() => setshowMenu(false)}>
              AI
            </Link>
          </div>

      )

      }

    </div>
    </>
    
  )
}

export default Navbar