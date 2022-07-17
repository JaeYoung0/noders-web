const CONSTANTS = {
  title: 'NODERS',
  description: 'CONNECT IDEAS TO REALITY. 노더스입니다.',
  siteUrl: 'https://www.noders-studio.com/',
  imageUrl: 'https://www.noders-studio.com/images/meta-cover.png',
  keywords: '브랜딩, 패키지, 로고, 웹디자인, 웹앱개발',
}

function Meta() {
  return (
    <>
      <meta name="description" content={CONSTANTS.description} />
      <meta content={CONSTANTS.keywords} name="keywords" />
      <meta name="robots" content="all" />
      <meta content="ko" name="locale" />
      <meta content="KRW" name="currency" />
      <meta content="web" name="environment" />

      {/* Meta - Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={CONSTANTS.title} />
      <meta property="og:description" content={CONSTANTS.description} />
      <meta property="og:image" content={CONSTANTS.imageUrl} />
      <meta property="og:url" content={CONSTANTS.siteUrl} />
      <meta property="og:site_name" content="스쿨라이브" />
      <meta property="og:locale" content="ko-KR" />
      <meta property="og:image:width" content="980" />
      <meta property="og:image:height" content="565" />

      {/* Meta - Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={CONSTANTS.title} />
      <meta name="twitter:description" content={CONSTANTS.description} />
      <meta name="twitter:image" content={CONSTANTS.imageUrl} />
      <meta name="twitter:url" content={CONSTANTS.siteUrl} />
    </>
  )
}

export default Meta
