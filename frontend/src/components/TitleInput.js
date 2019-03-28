import React from 'react'
import styled from 'styled-components'

const Title = styled.input`
  display:block;
  font-size:1.25em;
  border: 1px solid #DDD;
  padding: .25em;
  border-radius:.25em;
  margin: .5em 0;
  width: 16em;
  background-color: rgba(255, 255, 255, 0.2);
`

const TitleInput = ({onChange, value}) => {
  return (<Title type='text' placeholder="" onChange={onChange} value={value}></Title>)
}

export default TitleInput