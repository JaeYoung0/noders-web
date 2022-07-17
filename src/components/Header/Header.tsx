import React from 'react'
import { styled } from 'twin.macro'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './Header.style'

function Header() {
  const router = useRouter()
  return (
    <S.Container>
      <S.Logo src="/images/logo.png" onClick={() => router.push('/')} />
      <S.Navigation>
        <Link href="/">
          <a>ABOUT</a>
        </Link>
        <Link href="/works">
          <a>WORKS</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </S.Navigation>
    </S.Container>
  )
}

export default Header
