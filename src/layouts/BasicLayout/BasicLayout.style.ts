import { styled } from 'twin.macro'

export const Container = styled.div`
  position: relative;
`

export const Main = styled.main`
  min-height: 100vh;
  background: #121212;
  transform: translate3d(0, -1px, 0); // 흰 줄 제거
  overflow-x: hidden;
  margin-top: 6rem;
`
