import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import Link from 'next/link'

const HeaderWrapper = styled.header`
  display: flex;
  background: #000000;
  padding: 2rem 2.5rem;
`

const Logo = styled.img`
  margin-right: auto;
`

const NavWrapper = styled.nav`
  a {
    font-size: 1.2rem;
    color: #fff;
    margin-right: 5rem;
  }
`

function Header() {
  return (
    <HeaderWrapper>
      <Logo src="images/logo.png" />
      <NavWrapper>
        <Link href="/">
          <a>ABOUT</a>
        </Link>
        <Link href="/">
          <a>WORKS</a>
        </Link>
        <Link href="/">
          <a>CONTACT</a>
        </Link>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
