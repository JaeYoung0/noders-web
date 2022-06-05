import { Global, css } from '@emotion/react'

const DEFAULT_FONT_SIZE = 10
const MOBILE_DESIGN_WIDTH = 375
const MOBILE_MIN_WIDTH = 320
const MOBILE_MAX_WIDTH = 400

export default function GlobalFont() {
  return <Global styles={FontCSS} />
}

const FontCSS = css`
  html {
    font: normal 10px SUIT, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* 폰트 사이즈 */
  html {
    @media only screen and (min-width: 401px) and (max-width: 900px) {
      font-size: ${DEFAULT_FONT_SIZE * (MOBILE_MAX_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }

    @media only screen and (min-width: 321px) and (max-width: 400px) {
      font-size: ${(DEFAULT_FONT_SIZE / MOBILE_DESIGN_WIDTH) * 100}vw;
    }

    /* screen width 320px 이하는 더 작아지지 않도록 고정 */
    @media only screen and (max-width: 320px) {
      font-size: ${DEFAULT_FONT_SIZE * (MOBILE_MIN_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }
  }

  /* 기본 텍스트 스타일 */
  body {
    line-height: 1.4;
    letter-spacing: -0.035rem;
    word-spacing: -0.07rem;
  }
`
