import React from 'react'
import Header from '../../Navigation/index'
import { Wrapper } from './styles'

export default function DeafultLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  )
}
