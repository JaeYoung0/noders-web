import React from 'react'

function BasicLayout({ children }) {
  return (
    <>
      <header></header>
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default BasicLayout
