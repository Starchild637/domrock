import React from 'react'
import { Column as Container } from './styles'

const Column: React.FC<{ size?: number }> = props => {
  const { size, children } = props

  return (
    <Container size={size}>{children}</Container>
  )
}

export default Column