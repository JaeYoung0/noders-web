import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import BasicLayout from '@/layouts/BasicLayout'
import { WorksById } from './data'
import * as S from './[work].style'
import Image from 'next/image'

function Work() {
  const router = useRouter()

  const workId = router.query.workId as string

  const work = WorksById[workId]

  if (!work) return null

  return (
    <BasicLayout>
      <S.Container>
        <S.ImgWrapper>
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
            src={`/${workId}/${workId}-cover.jpeg`}
          />
        </S.ImgWrapper>
        {new Array(work.imgCount).fill(0).map((item, idx) => {
          return (
            <S.ImgWrapper>
              <Image
                key={idx}
                layout="responsive"
                width="100%"
                height="100%"
                objectFit="contain"
                src={`/${workId}/${workId}-${idx + 1}.jpeg`}
              />
            </S.ImgWrapper>
          )
        })}
      </S.Container>
    </BasicLayout>
  )
}

export default Work
