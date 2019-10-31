import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex
  flex-direction: column
`
export const ContainerHeader = styled.div`
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
`

export const ContainerTitle = styled.p`
  color: #003366
  font-size: 24px
  margin-bottom: 10px
`

export const Container = styled.div`
  width: 100%
  height: 400px
  border-radius: 4px
  background: #CFCFCF
  box-sizing: border-box
  padding: 20px
`
export const ContainerControls = styled.div`
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  width: auto
  height: 30px
`
export const Checkbox = styled.div`
  display: inline-block
  vertical-align: middle
  label {
    display: block
    padding-left: 5px
    margin-left: 5px
    color: #003366
    font-size: 14px
  }
  input {
    vertical-align: middle
    width: 13px;
    height: 13px;
    padding: 0;
    margin:0;
    vertical-align: bottom;
    position: relative;
    top: -1px;
    overflow: hidden;
  }
`

export const DashboardContent = styled.div`
  width: 100%
  height: calc(100% - 30px) !important
  flex: 1
  box-sizing: border-box
  display: flex
  flex-direction: row
  justify-content: space-between
  padding-top: 25px
  padding-bottom: 25px
`
export const DashboardColumns = styled.div`
  flex: 0.25
  height: 100%
  border: 1px solid purple
  display: flex
  align-items: center
  justify-content: center
  box-sizing: border-box
  padding-top: 40px
  padding-bottom: 40px
  padding-left: 10px
  padding-right: 10px
`
