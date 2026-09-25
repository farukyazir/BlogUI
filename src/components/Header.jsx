import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`header ${scrolled ? 'header-shadow' : ''}`}>

      <div className='leftside'>
        <h1>Logo | Blog</h1>

        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input placeholder='What do you want to read' />
        </div>
      </div>

      <div className='rightside'>
        <h3>Sign In</h3>
      </div>

    </div>
  )
}

export default Header