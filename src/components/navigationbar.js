/** @jsx jsx */
 // eslint-disable-next-line 
import React, { useState, useEffect, forwardRef } from 'react'
import { css, jsx } from '@emotion/core'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import Icon from './icon'


const leftLinks = ['Home', 'Series', 'Movies', 'Latest', 'Favorites']



/**
 * @function Navigationbar
 */
const Navigationbar = forwardRef((props, ref) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      window.pageYOffset > 75 ? setScrolled(true) : setScrolled(false)

    const onScroll = window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])



  return (
    
    <nav
    ref={ref}
    css={[
      NavigationbarCSS,
      scrolled
        ? css`
            background-color: rgb(20, 20, 20);
            background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7) 10%,
              rgba(0, 0, 0, 0)
            );
          `
        : css`
            background: transparent;
          `
    ]}
  >
   
    <ul>
      <li>
        <a href="/search">
          <img style={{paddingTop: "60px"}} alt='' height="190" src={logo} />
        </a>
      </li>

      {leftLinks.map(link => (
        <li key={link}>
          <a href="/">{link}</a>
        </li>
      ))}
    </ul>

    <ul className="right">
      <li>
      <Link to='/Search'> <Icon type="search" /> </Link> 
      </li>
      
      <li>
        <Icon type="bell-o" />
      </li>
    </ul>
   
  </nav>
  
)
})


const NavigationbarCSS = css`
  position: fixed;
  height: 68px;
  z-index: 99;
  width: 100%;
  padding: 5 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    margin-right: 20px;
  }

  a {
    font-size: 15px;
    letter-spacing: 0.5px;
    color: #e5e5e5;
  }

  a.active {
    color: white;
    font-weight: 500;
  }

  ul.right {
    i {
      font-size: 22px;
    }
  }
`

export default Navigationbar