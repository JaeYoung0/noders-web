import { css, styled } from 'twin.macro'

export const Outer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

export const Video = styled.video`
  position: absolute;
  /* z-index: -1; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TextArea = styled.div`
  position: absolute;
  bottom: -7.5rem;
  left: 0;

  display: flex;
  padding: 0 2.5rem;
`

export const TextBox = styled.div`
  margin-right: 10rem;
`

export const Name = styled.span`
  display: inline-block;

  font-weight: 300;
  font-size: 26px;
  line-height: 120%;
  /* or 31px */

  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  color: #ffffff;
`

export const Label = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 125.5%;
  /* identical to box height, or 15px */

  color: rgba(255, 255, 255, 0.7);
`

export const Text = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 2rem;
  font-size: 20px;
  line-height: 1.4;
`
