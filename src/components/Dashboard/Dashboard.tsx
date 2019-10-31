import React, { useState, useEffect } from 'react'
import {
  Container,
  ContainerWrapper,
  ContainerHeader,
  ContainerTitle,
  Checkbox,
  ContainerControls,
  DashboardContent
} from './styles'
import {
  SelectInput,
  Button,
  Card,
  Column
} from '../../components'

const Dashboard: React.FC<{}> = props => {

  const [expand, setExpand] = useState(false)
  const [cards, setCards] = useState([
    { id: 1, title: 'Obrigações geradas', load: 17, color: 'yellow', selected: false },
    { id: 2, title: 'Obrigações validadas no PVA', load: 42, color: 'green', selected: false },
    { id: 3, title: 'Relatórios e verificações', load: 61, color: 'purple' },
    { id: 4, title: 'Obrigações transmitidas', load: 89, color: '#003366' }
  ])


  useEffect(() => {
    setExpand(true)
  }, [cards])


  const generalOptions = [
    { value: 'SPED Fiscal', id: 1 },
    { value: 'EBITDA', id: 2 },
    { value: 'Faturamento', id: 3 }
  ]

  const monthOptions = [
    { value: 'Janeiro', id: 1 },
    { value: 'Fevereiro', id: 2 },
    { value: 'Março', id: 3 },
    { value: 'Abril', id: 4 },
    { value: 'Maio', id: 5 },
    { value: 'Junho', id: 6 }
  ]

  const yearOptions = [
    { value: 2014, id: 2014 },
    { value: 2015, id: 2015 },
    { value: 2016, id: 2016 },
    { value: 2017, id: 2017 },
    { value: 2018, id: 2018 }
  ]

  const buttonClick = () => {
    setExpand(!expand)
    setTimeout(() => {
      setExpand(expand)
    }, 1000)
  }

  const checkboxClick = () => {
    setExpand(!expand)
  }

  const handleSelection = (id: number) => {
    const change = [...cards]
    const index = cards.findIndex((card: any) => id === card.id)
    console.log(index)
    change[index].selected = !change[index].selected
    setCards(change)
  }

  return (
    <ContainerWrapper>
      <ContainerHeader>
        <ContainerTitle>Dashboard das obrigações</ContainerTitle>
        <Checkbox>
          <label><input checked={expand} onChange={() => checkboxClick()} type='checkbox' /> Incluir filiais</label>
        </Checkbox>
      </ContainerHeader>
      <Container>
        <ContainerControls>
          <SelectInput
            size={6}
            onChange={(e: any) => console.log(e.target.value)}
            options={generalOptions}
          />
          <SelectInput
            size={2}
            onChange={(e: any) => console.log(e.target.value)}
            options={monthOptions}
          />
          <SelectInput
            size={2}
            onChange={(e: any) => console.log(e.target.value)}
            options={yearOptions}
          />
          <Button
            size={2}
            label='Filtrar'
            onClick={() => buttonClick()}
          />
        </ContainerControls>
        <DashboardContent>
          {cards.map((card: any) => {
            return (
              <Column key={card.load}>
                <Card
                  onClick={() => handleSelection(card.id)}
                  selected={card.selected}
                  expand={expand}
                  title={card.title}
                  color={card.color}
                  load={card.load}
                />
              </Column>
            )
          })}
        </DashboardContent>
      </Container>
    </ContainerWrapper>

  )
}

export default Dashboard