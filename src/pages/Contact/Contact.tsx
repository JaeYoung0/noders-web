import React from 'react'
import BasicLayout from '@/layouts/BasicLayout'
import * as S from './Contact.style'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

function ContactPage() {
  return (
    <BasicLayout>
      <S.Container>
        <p>Hello 👋</p>
        <p>Contact me anytime</p>
        <br />
        <br />
        <br />

        <p>
          <MailOutlineIcon />
          hello@noders-studio.com
        </p>
      </S.Container>
    </BasicLayout>
  )
}

export default ContactPage
