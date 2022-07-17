import { styled } from 'twin.macro'
import Link from 'next/link'
import { SCREEN_BREAKPOINT } from '@/styles/mediaQuery'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  width: 100%;

  background: #121212;

  padding: 2rem 4vw;

  border-bottom: 1px solid #fff;
`

export const Logo = styled.img`
  margin-right: auto;

  object-fit: contain;

  cursor: pointer;

  ${SCREEN_BREAKPOINT('XSmall')} {
    width: 9rem;
  }

  ${SCREEN_BREAKPOINT('Small')} {
    width: 12rem;
  }

  ${SCREEN_BREAKPOINT('XLarge')} {
    width: 20rem;
  }
`

export const Navigation = styled.nav`
  height: 100%;

  a {
    color: #fff;
    padding: 2rem 0rem;
    &:hover {
      color: #f2d16b;
    }
  }

  ${SCREEN_BREAKPOINT('XSmall')} {
    a {
      font-size: 1.2rem;
      margin-left: 1.2rem;
    }
  }

  ${SCREEN_BREAKPOINT('Small')} {
    a {
      font-size: 1.6rem;
      margin-left: 1.6rem;
    }
  }

  ${SCREEN_BREAKPOINT('Large')} {
    a {
      font-size: 1.8rem;
      margin-left: 2.4rem;
    }
  }

  ${SCREEN_BREAKPOINT('XLarge')} {
    a {
      font-size: 2.4rem;
      margin-left: 3rem;
    }
  }
`
