import React from 'react'
import { returnDay, returnMonthName } from './utils'
import { Container, Sidebar, Panel, Greetings, Header, LocalDate } from './styles'

const ScreenWrapper: React.FC<{}> = props => {
  const { children } = props

  const date = new Date()

  const returnDate = (date: any) => {
    return `São Paulo, ${returnDay(date.toLocaleString())} de ${returnMonthName(date)} de ${date.getFullYear()}`
  }

  return (
    <Container>
      <Sidebar />
      <Panel>
        <Header>
          <Greetings>
            Olá <span className='strong'>Fulano</span>, bem-vindo ao Dom Rock
          </Greetings>
          <LocalDate>
            {returnDate(date)}
          </LocalDate>
        </Header>
        {children}
      </Panel>
    </Container>
  )
}

export default ScreenWrapper