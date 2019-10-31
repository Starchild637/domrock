import styled from 'styled-components'

export const Column = styled.div<{ size?: number }>`
  width: ${({ size }) => size ? `calc(${(size / 12 * 100).toFixed(2)}% - 7px) !important` : 'calc(25% - 7px) !important'}
`