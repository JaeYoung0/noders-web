import { SCREEN_BREAKPOINT } from '@/styles/mediaQuery'
import { bottomUp } from '@/styles/utils'
import { styled } from 'twin.macro'

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;

  padding: 3rem 4vw;
  margin: 0 auto;

  ${SCREEN_BREAKPOINT('XLarge')} {
    padding: 10rem 4vw;
    flex-direction: row;
  }
`

export const CategoriesWrapper = styled.div`
  .category-label {
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
  }

  .category-description {
    font-size: 1.8rem;
    line-height: 1.4;
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.6);
    padding-right: 6rem;
  }

  ${SCREEN_BREAKPOINT('XSmall')} {
    width: 100%;
    padding-bottom: 3rem;
  }

  ${SCREEN_BREAKPOINT('XLarge')} {
    width: 15%;
  }
`

export const ImagesWrapper = styled.ul`
  display: grid;
  gap: 1rem;

  min-height: 100vh;

  li {
    background-color: gray;
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  img {
    width: 100%;
    height: 100%;
  }

  ${SCREEN_BREAKPOINT('XSmall')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${SCREEN_BREAKPOINT('Small')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${SCREEN_BREAKPOINT('Large')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${SCREEN_BREAKPOINT('XLarge')} {
    width: 85%;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const WorkItem = styled.li`
  position: relative;

  cursor: pointer;

  > div {
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    > div {
      visibility: visible;
      opacity: 0.6;
      transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  transition: transform 1s ease-in-out;
`

export const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  color: #fff;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
`
