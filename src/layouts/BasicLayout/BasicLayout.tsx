import Link from 'next/link'
import * as S from './BasicLayout.style'

function BasicLayout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>ABOUT</a>
          </Link>
          <Link href="/">
            <a>WORKS</a>
          </Link>
          <Link href="/">
            <a>CONTACT</a>
          </Link>
        </nav>
      </header>
      <S.Main>{children}</S.Main>
      <footer>
        <span className="text-3xl font-bold underline">test</span>
      </footer>
    </>
  )
}

export default BasicLayout
