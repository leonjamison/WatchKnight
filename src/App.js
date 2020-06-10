// import React from 'react';
import { Global, css} from '@emotion/core'
import Homepage from './components/homepage'
import Navigationbar from './components/navigationbar'
import Movielist from './components/movielist'
import React, { useState, useEffect, createRef } from 'react'
import Footer from './components/footer.js'
import Detailpane from './components/DetailPane/detailpane'

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Searchresults from './components/searchresults'



const initialRow = {
  category: '',
  position: { top: 0, bottom: 0 }
}

const categories = [
  'Popular Movies'
  // 'Action',
  // 'Drama'
  // 'Comedy'
  // 'Documentary'
  // 'Sci-Fi',
  // 'Romance'
]


const App = () => {
  const [activeRow, setActiveRow] = useState(initialRow)

  const { category, position: {top, bottom} } = activeRow

  const navRef = createRef()

  useEffect(() => {
    if (!category) return
    const navHeight = navRef.current.offsetHeight

    window.scrollTo({
      top: top + window.scrollY - navHeight,
      left: 0,
      behavior: 'smooth'
    })
  }, )

  const setActive = activeRow => {
    activeRow.category ? setActiveRow(activeRow) : setActiveRow(initialRow)
  }

 

  return (
    
 
    <>
      <Global styles={GlobalCSS} />
      <Navigationbar ref={navRef} />
      


      <Homepage >
        <Movielist category={categories[0]} setActive={setActive}/>
      </Homepage >

      {categories.slice(1).map(category => (
        <Movielist key={category} category={category} setActive={setActive} />
      ))}
         <Detailpane
          category={category}
          top={bottom + window.scrollY}
          setActive={setActive}
      />

      <Footer />
      </>
    
  )
}


const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }
  body {
    background: #151515;
  }
  a {
    text-decoration: none;
    color: white;
  }
  p {
    font-size: 20px;
  }
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }
  .Icon {
    font-size: 18.5px;
    cursor: pointer;
    color: white;
  }


`

export default App;
