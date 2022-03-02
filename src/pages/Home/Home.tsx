import React from 'react'
import { BasicLayout } from '@/layouts'
import Banner from '@/components/Banner'
import Graph from '@/components/Graph'
import CodingVideo from '@/components/CodingVideo'

function HomePage() {
  return (
    <BasicLayout>
      <Banner />
      <Graph />
      <CodingVideo />
    </BasicLayout>
  )
}

export default HomePage
