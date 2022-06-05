import { keyframes } from '@emotion/react'
import { css } from 'twin.macro'

export const bottomUp = keyframes`
  from{

    transform: translateY(140%);
  }

  to{
    visibility:visible ;
    transform: translateY(0%);
  }
`

export const bottomUpAnimation = css`
  animation: ${bottomUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`
