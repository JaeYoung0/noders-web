import Footer from '@/components/Footer'
import Header from '@/components/Header'
import * as S from './BasicLayout.style'

function BasicLayout({ children }) {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  )
}

export default BasicLayout
