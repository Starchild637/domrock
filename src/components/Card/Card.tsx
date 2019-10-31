import React from 'react'
import {
  CardContainer,
  CardContent,
  CardTitle,
  FillContainer,
  Fill,
  Label,
  Link
} from './styles'

interface ICard {
  title: string
  load: number
  color: string
  expand: boolean
  selected: boolean
  onClick: () => void
}

const Card: React.FC<ICard> = props => {
  const { title, load, color, expand, selected, onClick } = props
  return (
    <>
      <CardContainer color={color} onClick={onClick} selected={selected}>
        <CardTitle selected={selected}>{title}</CardTitle>
        <CardContent>
          <FillContainer>
            <Fill expand={expand} load={load} color={color} />
          </FillContainer>
        </CardContent>
        <Label id='value'>{load} de 100</Label>
      </CardContainer>
      <Link>Ver mais</Link>
    </>
  )
}

export default Card