import { bottomUp } from '@/styles/utils'
import { keyframes } from '@emotion/react'
import { styled } from 'twin.macro'

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

/* @keyframes duration | timing-function | delay |
iteration-count | direction | fill-mode | play-state | name */

export const Container = styled.div`
  padding: 0 1.5rem;

  svg {
    transform: rotate(180deg);
    margin: 0 auto;
  }
  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 3s linear 1s forwards;
  }

  white-space: pre;
`

export const AnimationBox = styled.div`
  display: inline-block;
  overflow: hidden;

  h1 {
    display: inline-block;
    font-size: 3.5rem;
    line-height: 1;
    color: #fff;
    visibility: hidden;
  }

  &:nth-of-type(1) {
    h1 {
      animation: ${bottomUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s forwards;
    }
  }

  &:nth-of-type(2) {
    h1 {
      animation: ${bottomUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s forwards;
    }
  }

  &:nth-of-type(3) {
    h1 {
      animation: ${bottomUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s forwards;
    }
  }

  &:nth-of-type(4) {
    h1 {
      animation: ${bottomUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s forwards;
    }
  }

  &:nth-of-type(5) {
    h1 {
      animation: ${bottomUp} 1.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s forwards;
    }
  }
`
