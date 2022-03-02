import React from 'react'
import * as S from './Banner.style'

function Banner() {
  return (
    <S.Outer>
      <S.Video src="videos/banner.mp4" loop autoPlay muted />

      <S.TextArea>
        <S.TextBox>
          <S.Name>
            노드
            {/* FIXME?: span 안에 span ... */}
            <S.Label>NODE</S.Label>
          </S.Name>

          <S.Text>
            네트워크에서
            <br />
            연결망의 교점이자
            <br />
            데이터 각각의 개체
          </S.Text>
        </S.TextBox>

        <S.TextBox>
          <S.Name>
            노더스
            <S.Label>NOD-ERS</S.Label>
          </S.Name>

          <S.Text>
            아이디어 -- 현실
            <br />
            당신 -- 서비스
            <br />
            세상 -- 세상
            <br />
            연결해주는 사람들
          </S.Text>
        </S.TextBox>
      </S.TextArea>
    </S.Outer>
  )
}

export default Banner
