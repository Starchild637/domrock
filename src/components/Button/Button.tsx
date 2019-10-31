import React from 'react'
import {
  Container
} from './styles'
import {
  Column
} from '../../components'

const Button: React.FC<{ label: string, onClick: () => void, size?: number }> = props => {
  const { label, onClick, size } = props
  return (
    <Column size={size}>
      <Container onClick={onClick}>
        {label}
      </Container>
    </Column>
  )
}

export default Button