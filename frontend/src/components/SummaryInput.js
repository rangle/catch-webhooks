import React from 'react'
import styled from 'styled-components'

const Input = styled.textarea`
  display:block;
  font-size:1em;
  border: 1px solid #DDD;
  padding: .25em;
  border-radius:.25em;
  margin: .5em 0;
`

const SummaryInput = ({onChange, value}) => {
  return (<Input type='text' cols={40} placeholder="notes" onChange={onChange} value={value}></Input>)
}

export default SummaryInput