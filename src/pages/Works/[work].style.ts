import { SCREEN_BREAKPOINT } from '@/styles/mediaQuery'
import { bottomUp } from '@/styles/utils'
import { styled } from 'twin.macro'

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  ${SCREEN_BREAKPOINT('XSmall')} {
    padding: 1em 0rem 0rem;
  }

  ${SCREEN_BREAKPOINT('Large')} {
    padding: 6rem 0rem 0rem;
  }
`
export const ImgWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  max-width: 120rem;
`
