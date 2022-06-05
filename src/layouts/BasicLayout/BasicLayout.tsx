import Footer from '@/components/Footer'
import Header from '@/components/Header'
import * as S from './BasicLayout.style'

function BasicLayout({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </div>
  )
}

export default BasicLayout
