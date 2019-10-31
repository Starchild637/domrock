import styled, { css } from 'styled-components'

export const CardTitle = styled.p<{ selected: boolean }>`
  font-size: 14px
  color: ${({ selected }) => selected ? '#FFF' : '#003366'}
  text-align: center
`
export const CardContent = styled.div`
  width: 120px
  height: 120px
  border-radius: 120px
  background-color: #CFCFCF
  display: flex
  position: relative
  align-items: center
  justify-content: center
`
export const FillContainer = styled.div`
  width: 60px
  height: 60px
  border-radius: 6px
  border: 1px solid #C5C5C5
  background: #EFEFEF
  position: relative
`
export const Fill = styled.div<{ load: number, color?: string, expand: boolean }>`
  width: 100%
  transition: height 1s ease-in
  height: ${({ load, expand }) => expand ? `${load}%` : '0'}
  background: ${({ color }) => color || '#00E238'}
  position: absolute
  bottom: 0px
  border-radius: 6px
  padding: inherit
`
export const Label = styled.p`
  font-size: 14px
  color: #3A3A3A
  text-align: center
`
export const Link = styled.p`
  color: #003366
  text-align: center
  margin: 3px
  &:hover {
    text-decoration: underline
    cursor: pointer
  }
`
export const CardContainer = styled.div<{ selected: boolean, color: string }>`
  width: 100%
  height: 100%
  box-sizing: border-box
  border: 1px solid #C5C5C5
  background: ${({ selected, color }) => !selected ? '#EFEFEF' : color}
  border-radius: 5px
  display: flex
  align-items: center
  justify-content: space-between
  flex-direction: column
  cursor: pointer
`