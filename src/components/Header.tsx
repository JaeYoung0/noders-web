import React from 'react'
import { styled } from 'twin.macro'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  width: 100%;
  background: #121212;
  padding: 2rem 1.5rem;

  z-index: 10;

  border-bottom: 1px solid #fff;
`

const Logo = styled.img`
  margin-right: auto;
  width: 9rem;
  object-fit: contain;
`

const NavWrapper = styled.nav`
  height: 100%;

  a {
    font-size: 1.2rem;
    color: #fff;
    margin-left: 1.6rem;
    font-weight: bold;
  }
`

function Header() {
  const router = useRouter()
  return (
    <HeaderWrapper>
      <Logo src="images/logo.png" onClick={() => router.push('/')} />
      <NavWrapper>
        <Link href="/">
          <a>ABOUT</a>
        </Link>
        <Link href="/works">
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
