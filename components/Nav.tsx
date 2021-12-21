import React from 'react'
import s from 'styled-components'

const NavStyle = s.nav`
  text-align: right;
`

const Nav = () => {
  return (
    <NavStyle>
      <ul>
        <a href="/">home</a>
      </ul>
      <ul>
        <a href="projects">projects</a>
      </ul>
      <ul>
        <a href="bookshelf">bookshelf</a>
      </ul>
      <ul>
        <a href="film">film</a>
      </ul>
    </NavStyle>
  )
}

export default Nav
