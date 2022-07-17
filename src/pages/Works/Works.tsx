import React, { useState } from 'react'
import BasicLayout from '@/layouts/BasicLayout'
import { CategoryType, WorksByCategory } from './data'
import Image from 'next/image'

import * as S from './Works.style'
import { useRouter } from 'next/router'

function WorksPage() {
  const [category, setCategory] = useState<CategoryType>('ALL')
  const workslist = WorksByCategory[category].works

  const router = useRouter()

  return (
    <BasicLayout>
      <S.FlexContainer>
        <S.CategoriesWrapper>
          {Object.keys(WorksByCategory).map((item, idx) => {
            return (
              <p
                className="category-label"
                style={{ color: item === category ? '#F2D16B' : '#fff' }}
                onClick={() => setCategory(item as CategoryType)}
                key={idx}
              >
                {item}
              </p>
            )
          })}
          <p className="category-description">
            We believe in a pluralistic vision of design that is inclusive of all backgrounds, all
            possible ways of being, imaginable styles of living, and all opportunities for
            creativity.
          </p>
        </S.CategoriesWrapper>
        <S.ImagesWrapper>
          {workslist.map((item, idx) => (
            <S.WorkItem key={idx} onClick={() => router.push(`/works/${item.id}`)}>
              <Image
                layout="responsive"
                width="100%"
                height="100%"
                objectFit="contain"
                src={`/${item.id}/${item.id}-cover.jpeg`}
                alt={item.title}
              />
              <S.Dim>{item.title}</S.Dim>
            </S.WorkItem>
          ))}
        </S.ImagesWrapper>
      </S.FlexContainer>
    </BasicLayout>
  )
}

export default WorksPage
