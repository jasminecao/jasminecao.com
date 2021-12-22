import React from 'react'
import s from 'styled-components'

const NavStyle = s.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem 0 1rem 0;

  a {
    margin-right: 1rem;
  }
`

export const Nav = () => {
  return (
    <NavStyle>
      <a href="/">home</a>
      <a href="projects">projects</a>
      <a href="bookshelf">bookshelf</a>
      <a href="film">film</a>
    </NavStyle>
  )
}

const SideNavStyle = s.nav`
  text-align: right;
`

export const SideNav = () => {
  return (
    <SideNavStyle>
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
    </SideNavStyle>
  )
}
