import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import Link from 'next/link'
import { keyframes } from '@emotion/react'
import { bottomUp } from '@/styles/utils'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background: #121212;
  padding: 1rem;
`

const Logo = styled.img`
  margin-right: auto;
  width: 9rem;
  object-fit: contain;

  animation: ${bottomUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const NavWrapper = styled.nav`
  height: 100%;

  a {
    font-size: 1.2rem;
    color: #fff;
    margin-left: 1.6rem;
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
