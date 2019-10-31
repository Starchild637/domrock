import styled from 'styled-components'

export const Container = styled.div`
  flex: 1
  height: 100vh
  display: flex
  flex-direction: row
`

export const Panel = styled.div`
  display: flex
  height: 100%
  width: calc(100% - 60px) !important
  position: relative
  background: #EFEFEF
  padding: 60px
  box-sizing: border-box
  flex-direction: column
`
export const Sidebar = styled.div`
  width: 60px
  height: 100vh
  background-color: #003366
`
export const Header = styled.div`
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
`
export const Greetings = styled.h6`
  color: #3A3A3A
  font-size: 14px
  .strong {
    font-weight: bolder
  }
`
export const LocalDate = styled.h6`
  color: #003366
  font-size: 14px
`