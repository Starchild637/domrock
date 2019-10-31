import React from 'react'
import { Column } from '../../components'
import { Select, Option } from './styles'

interface ISelect {
  onChange: (value: any) => void
  options: any
  size?: number
}

const SelectInput: React.FC<ISelect> = props => {
  const { onChange, options, size } = props
  console.log(options)

  const renderOptions = (options: any) => {
    return options.map((option: Record<string, any>) => {
      return <Option key={option.id} value={option.value}>{option.value}</Option>
    })
  }

  return (
    <Column size={size}>
      <Select onChange={onChange}>
        <Option>Selecione um:</Option>
        {renderOptions(options)}
      </Select>
    </Column>
  )
}

export default SelectInput