import React, { useEffect, useRef } from 'react'
import { css, styled } from 'twin.macro'

const Video = styled.video`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function CodingVideo() {
  const videoRef = useRef<HTMLVideoElement>()
  useEffect(() => {
    videoRef.current.playbackRate = 0.2
    // videoRef.current.play
  }, [])
  return (
    <div>
      <Video ref={videoRef} src="videos/coding.mp4" />
    </div>
  )
}

export default CodingVideo
